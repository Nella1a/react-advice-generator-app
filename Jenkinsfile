#! /usr/bin/env groovy

library identifier: 'jenkins-shared-lib-node-js-apps@main', retriever: modernSCM([$class: 'GitSCMSource',
 remote: 'https://github.com/Nella1a/jenkins-shared-lib-node-js-apps.git',
 credentialsId: 'github-credentials'
])



pipeline {
  agent any
  stages {
        stage ('Run Tests') {
          steps {
            script {
              echo 'run tests'
              sh 'npm install'
              sh 'npm run test'
            }
          }
        }
        stage('Increment Version') {
          steps {
            script {
              echo "increment version"
            }
          }

        }
        stage('Build Docker Image') {
            steps {
                    script {
                        echo 'Building the docker image'
                    }
            }
        }
        stage ("Commit Version Update") {
            steps {
              script {
                    echo "Commit changes to github"

              }
            }
        }
        stage ("Deploy") {
            steps {
              script {
                    echo "Deploying ... "
              }
            }
        }
  }
}