'use strict';
var fs = require('fs');
var tasks = fs.readdirSync('./gulp/tasks');
var gulp = require('gulp');
tasks.forEach((task)=>{
	require('./tasks/' + task);
});
