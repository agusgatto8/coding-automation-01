# Coding challenge QA

## Choose an automation framework to solve the following challenge:
#### 1 - Create a new repository with the name “coding-automation-01”
#### 2 - Set up the chosen framework
#### 3 - Make the first commit with the framework setup
#### 4 - Description of the flow to be tested:
##### 4-A Navigate to the following url: https://opensource-demo.orangehrmlive.com/
##### 4-B Login with the provided credentials
##### 4-C Check the Dashboard screen is displayed
##### 4-D Navigate to ‘My info’ screen
##### 4-E Check that the name and first name match with the name and firstname displayed in the header.
##### 4-F Modify the DOB to Today and save.
##### 4-G Check the DOB has been modified successfully.
##### 4-H Logout
##### 4-I Check the UR

## Steps to run tests.
1. Clone repository on your local machine (https://github.com/agusgatto8/coding-automation-01.git).
2. Install dependencies. (yarn install)
3. Run the tests with the "yarn wdio" command.

## Explanation
###
Given the proposed challenge, I opted to use WebdriverIO as the framework.

I worked with POM to be able to maintain a better order, maintainability and solve errors with greater speed, where the necessary locators were obtained and the methods that were going to be used were also defined.

In the E2E created, the flow requested by the challenge was carried out, complying with each of the points, verifying everything requested.