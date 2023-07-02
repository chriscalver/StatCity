fetch("https://www.strava.com/api/v3/athletes/27856438/stats", {
	"method": "GET",
	"headers": {
		"Authorization": "Bearer e3f690e8deb89ea679b5ba1a8b8951e20ba893c4"
	}
})
.then(response => response.json())
.then(response => {
  console.log(response);
  //console.log(response.content);
    
 document.getElementById('box1').innerHTML = response.all_run_totals.count;
    // document.getElementById('box2').innerHTML = response.username;
})
.catch(err => {
	console.log(err);
});




