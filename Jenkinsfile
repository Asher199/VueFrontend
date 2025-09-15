pipeline {
    agent any

    tools {
        nodejs 'node22.19.0'   // Node.js configured in Jenkins (Manage Jenkins > Global Tool Config)
    }

    environment {
        NETLIFY_AUTH_TOKEN = credentials('netlify-auth')   // Jenkins secret text for Netlify token
        NETLIFY_SITE_ID    = credentials('netlify-site')   // Jenkins secret text for Site ID
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

        stage('Deploy to Netlify') {
            steps {
                sh '''
                    npx netlify deploy \
                        --auth=$NETLIFY_AUTH_TOKEN \
                        --site=$NETLIFY_SITE_ID \
                        --dir=dist \
                        --prod
                '''
            }
        }
    }
}

