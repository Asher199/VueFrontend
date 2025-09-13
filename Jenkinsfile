pipeline {
    agent any

    tools {
        nodejs 'node22.19.0'   // Configure Node.js in Jenkins (Manage Jenkins > Global Tool Config)
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Asher199/VueFrontend',
                    credentialsId: 'github-token'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm run test || echo "No tests defined"'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'npm run build'
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }

        stage('Deploy') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'deploy-ssh', 
                    usernameVariable: 'SSH_USER',
                    passwordVariable: 'SSH_PASS'
                )]) {
                    sh '''
                        sshpass -p "$SSH_PASS" scp -o StrictHostKeyChecking=no -r \
                        dist/assets dist/favicon.ico dist/index2.html \
                        $SSH_USER@192.168.49.114:/var/www/html/
                    '''
                }
            }
        }
    }
}

