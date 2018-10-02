pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node:8-stretch'
    }
  }
  environment {
    CI = 'true'
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh chmod +x './jenkins/scripts/test.sh'
      }
    }
  }
}