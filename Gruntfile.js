module.exports = function (grunt) {

    grunt.initConfig({
        copy: {
            project:	{
                expand:	true,
                cwd:	'.',	
                src:	['**',	'!Gruntfile.js',	'!package.json',
                                                                '!bower.json'],
                dest:	'dist'
            }
        },
        tarefa2: {
            /*	configurações	do	tarefa2	*/
        }
    });


    grunt.loadNpmTasks('grunt-contrib-copy');
};