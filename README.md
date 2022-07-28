# my_home_openapi
Specification between front and back for the my home application

# Publish

To update source, modify the openapi specification.

Change version of openapi specification.

Change version in package.json (for client_axios)

In each part, launch :
   - `npm all`
   - `npm run deploy`

# NPM

To publish a npm package you need to register with `npm adduser --registry=https://npm.pkg.github.com --scope=@jbwittner`
The password are a [token](https://github.com/settings/tokens)

# Maven

To publis a maven package you need this settings.xml :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0                  http://maven.apache.org/xsd/settings-1.0.0.xsd">
   <profiles>
      <profile>
         <id>GitHub</id>
         <repositories>
            <repository>
               <id>central</id>
               <url>https://repo1.maven.org/maven2</url>
            </repository>
            <repository>
               <id>github</id>
               <url>https://maven.pkg.github.com/jbwittner/*</url>
               <snapshots>
                  <enabled>true</enabled>
               </snapshots>
            </repository>
         </repositories>
      </profile>
   </profiles>
   <servers>
      <server>
         <id>github</id>
         <username>USERNAME</username>
         <password>TOKEN</password>
      </server>
   </servers>
   <activeProfiles>
      <activeProfile>GitHub</activeProfile>
   </activeProfiles>
</settings>
```

# Java documentation

[**README Java**](server_springboot/README.md)