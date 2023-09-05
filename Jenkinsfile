pipeline {
    agent any

    stages {
        stage('Run Tests in SonarQube') {
            steps {
                // Add your SonarQube test execution command here
                sh '
                sonar-scanner \
                  -Dsonar.projectKey=newpro \
                  -Dsonar.sources=. \
                  -Dsonar.host.url=http://localhost:9000 \
                  -Dsonar.token=sqp_ff802c479c6d195ee9f3c927876ff84611097e89
                '  // Example command, replace with your actual command
            }
        }

        stage('Deploy to S3') {
            steps {
                sh 'aws s3 cp . s3://mywebsitebucket78 --recursive'
                sh 'aws s3api put-bucket-policy --bucket mywebsitebucket78 --policy file://policy.json'
                sh 'aws s3 website s3://mywebsitebucket78/ --index-document index.html --error-document error.html'
            }
        }
    }
}
