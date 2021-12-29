# Profile landing page
This is a project that contains Lightning Web Components by salesforce. To work with it you will need to have a [salesforce developer account](https://developer.salesforce.com/)

Below are the steps to recreate the templated in a scratch org.

## Get the following requirements
1. A [salesforce developer account](https://developer.salesforce.com/)
2. [sfdx cli tool](https://developer.salesforce.com/tools/sfdxcli)

## Setup the org
1. Clone the repository -> `$ git clone https://github.com/vikie1/Personal-profile-landing-page.git`
2. `$ cd Personal-profile-landing-page`
3. `$ sfdx auth:web:login -d -a DevHub` -> Login to your DevHub
4. `$ sfdx force:org:create -s -f config/project-scratch-def.json -a insert-prefered-scratchorg-name` -> Create a scratch org.
5. `$ sfdx force:org:open` -> Open the scratch org
6. On the setup page of your scratch org, create a custom object called `CustomerInfo` and add fields `Name, Email and Phone`.
7. On the quick search, look for permissions set and create a permission set. Assign read and write permissions to on the `CustomerInfo` object and all the fields you created on step 6.
8. Run `$ sfdx force:user:permset:assign -n [insert permission set name from step 7]` -> Assign the permission to your scratch org.
9. `$ sfdx force:source:push` -> deploy the project to the scratch org

## View the project
1. On the quick search, look for `Lightning App Builder`.
2. Create a new page by selecting app page and give it a name you prefer.
3. On the left panel, you should see `Customer Info, Landing Page and Map Page` under Custom.
4. Drag any of the 3 components to the lightning app builder page.
5. On the App search, type the name of the page you created on step 2 and you should see the component you selected.
