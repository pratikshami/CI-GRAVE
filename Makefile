test:
	@./node_modules/.bin/mocha -u bdd

.PHONY: test

jenkins:
    @JUNIT_REPORT_PATH=report.xml JUNIT_REPORT_STACK=1 ./node_modules/.bin/mocha --reporter mocha-jenkins-reporter || true
 
.PHONY: jenkins