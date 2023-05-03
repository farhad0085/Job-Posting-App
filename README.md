# Job-Posting-App

## signing
### Create the keystore file
Run the following code inside android/app folder
```
keytool -genkeypair -v -storetype PKCS12 -keystore bdbox_version_2_3.keystore -alias bdbox_version_2_3 -keyalg RSA -keysize 2048 -validity 10000
```

# Generate the upload key file
```
keytool -export -rfc -keystore bdbox_version_2_3.keystore -alias bdbox_version_2_3 -file upload_certificate.pem
```

### Release

```
cd android/
./gradlew clean
./gradlew bundleRelease
```