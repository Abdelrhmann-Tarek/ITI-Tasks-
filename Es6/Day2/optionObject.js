function showData(options={} ) {
	let defaultValues = {
		courseName: "default Name",
		courseDuration: "Default Duration",
		courseOwner: "Default Owner",
	};
	Object.assign(defaultValues, options);

	console.log(
    `
     Course Name = ${defaultValues.courseName}
     Course Duration = ${defaultValues.courseDuration}
     Course Owner = ${defaultValues.courseOwner}
     
     `);
    }

    // showData() 
    
    // showData({courseName: "Freelance",
	// 	courseDuration: "120 Hours",
	// 	courseOwner: "Mahara Tech",})

