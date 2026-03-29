---
title: "MacOS Code Signing & Notarization for Electron Apps"
date: "2026-01-13T13:57:58-05:00"
category: "technical"
tags: ["project", "code signing", "technical", "electronJS"]
---

Apparently, I cannot get Kairos running (without some magic) or even
auto-update on MacOS. There is an entrance fee. I don't want to go through this
again. So here is a complete guide for signing and notarizing Electron apps for
distribution outside the Mac App Store.

## Prerequisites

1. [Apple Developer account](https://developer.apple.com/programs/) (USD$99/year)
2. Electron app with electron-builder

## Create Developer ID Application Certificate

1. Go to [Apple certificates list](https://developer.apple.com/account/resources/certificates/list)
2. Click `+` to create new certificate
3. Select _Developer ID Application_ (last option under Software)
4. Select _G2 Sub-CA (Xcode 11.4.1 or later)_
5. Upload a Certificate Signing Request (CSR)

### Creating the CSR

1. Open _Keychain Access_
2. Menu > _Keychain Access_ > _Certificate Assistant_ -> _Request a Certificate
   From a Certificate Authority..._
3. Fill in:
   - User Email: your Apple ID email
   - Common Name: your name
   - CA Email Address: leave blank
   - Request is: _Saved to disk_
4. Save the `.certSigningRequest` file
5. Upload to Apple Developer portal

### Download and Install

1. Download the generated `.cer` file
2. Double-click to install
3. Select _login_ keychain when prompted

## Fix "Certificate Not Trusted" Error

If you see "certificate is not trusted" in red:

1. Go to [Apple PKI](https://www.apple.com/certificateauthority/)
2. Download _Developer ID - G2_ (under "Subordinate Certification Authority")
3. Double-click to install to _login_ keychain

Your certificate should now show as valid.

## Configure electron-builder

Add to `electron-builder.yml`:

```yaml
mac:
  category: public.app-category.productivity
  target:
    - dmg
    - zip
  icon: build/icon.icns
  hardenedRuntime: true # Required for notarization
  gatekeeperAssess: false
  notarize: true # Enable automatic notarization
```

electron-builder automatically finds Developer ID Application certificates in your keychain.

## Create App-Specific Password

Required for notarization:

1. Go to https://appleid.apple.com > Sign In
2. App-Specific Passwords > Generate
3. Name it (e.g., "Electron Notarization")
4. Save the password (format: `xxxx-xxxx-xxxx-xxxx`)

## Local Build with Signing

Set environment variables and build:

```bash
export APPLE_ID="your@email.com"
export APPLE_APP_SPECIFIC_PASSWORD="xxxx-xxxx-xxxx-xxxx"
export APPLE_TEAM_ID="XXXXXXXXXX"  # 10-char code from certificate

npm run build:mac
```

You should see:

```
signing         file=dist/mac-arm64/YourApp.app identityName=...
notarizing      file=dist/mac-arm64/YourApp.app
notarization successful
```

## Verify Signing & Notarization

```bash
# Check code signature
codesign -dv --verbose=4 dist/mac-arm64/YourApp.app

# Check notarization (should say "source=Notarized Developer ID")
spctl -a -vvv -t install dist/mac-arm64/YourApp.app
```

## CI/CD Setup (GitHub Actions)

### Export Certificate as .p12

1. Open _Keychain Access_
2. Find _Developer ID Application: Your Name_ certificate
3. Right-click -> _Export_ -> save as `.p12`
4. Set a strong password

### Base64 Encode

```bash
base64 -i ~/Desktop/Certificates.p12 | pbcopy
```

### GitHub Secrets

Go to repo -> Settings -> Secrets and variables -> Actions -> Repository secrets

Add these secrets:

| Secret Name                   | Value                                |
| ----------------------------- | ------------------------------------ |
| `CSC_LINK`                    | Base64-encoded .p12 (from clipboard) |
| `CSC_KEY_PASSWORD`            | Password you set for .p12            |
| `APPLE_ID`                    | your@email.com                       |
| `APPLE_APP_SPECIFIC_PASSWORD` | xxxx-xxxx-xxxx-xxxx                  |
| `APPLE_TEAM_ID`               | 10-character team ID                 |

### Workflow Configuration

```yaml
- name: Build Electron app
  run: npm run build:mac
  env:
    GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    CSC_LINK: ${{ secrets.CSC_LINK }}
    CSC_KEY_PASSWORD: ${{ secrets.CSC_KEY_PASSWORD }}
    APPLE_ID: ${{ secrets.APPLE_ID }}
    APPLE_APP_SPECIFIC_PASSWORD: ${{ secrets.APPLE_APP_SPECIFIC_PASSWORD }}
    APPLE_TEAM_ID: ${{ secrets.APPLE_TEAM_ID }}
```

## Finding Your Team ID

Look at your certificate in Keychain Access:

```
Developer ID Application: Your Name (XXXXXXXXXX)
                                      ^^^^^^^^^^
                                      This is your Team ID
```

Or find it at `https://developer.apple.com/account` -> Membership Details.

## Notarization Time

Notarization uploads your app to Apple for automated malware scanning:

- Usually takes 10-40 minutes (sometimes longer than build time)
- Fully automated (no human review like App Store)
- Happens on every build

## Troubleshooting

### "Certificate not trusted"

Install Apple's intermediate certificate from [here](https://www.apple.com/certificateauthority/)

### Notarization fails with "team ID" error

Ensure `APPLE_TEAM_ID` is set and matches your certificate.

### CI build fails to find certificate

Verify `CSC_LINK` is properly base64 encoded and `CSC_KEY_PASSWORD` is correct.

### "No signing identity found"

The certificate must have the private key attached. When exporting to .p12,
make sure to export from "My Certificates" category which includes the private
key.
