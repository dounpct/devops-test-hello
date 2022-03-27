if ((currentBuild.number == 1) && (env.TAG_NAME == null)) {
    print "INFO: Build skipped due to First Branch Indexing (CI) ${currentBuild.number} ${env.BRANCH_NAME}"
    return
}

if ((env.TAG_NAME != null) && (env.TAG_NAME.substring(0,4) != "tag/")) {
    print "INFO: Build skipped due to miss tag name format ${env.TAG_NAME}.it should be tag/*"
    return
}

library 'pipeline-libraries@develop'

pipelineFlow('ai-test', '1.0.0')
