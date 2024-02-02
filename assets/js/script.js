fetch('https://GetSimpleCMS-CE-themes.github.io/db.json')
    .then((response) => response.json())
    .then((data) => {

        data.forEach(el => {

            document.querySelector('.db').insertAdjacentHTML('beforeend', `

<div class="db-item" id="${el['name'].replace(/ /g, '-').replace(/[^\w\s]|_/g, '').toLowerCase()}">
	<center>
		<h3>${el['name']}</h3>
		<img src="${el['thumb']}">
		<p class="db-item-info center">${el['info']}</p>
	</center>
	<hr>
	<p class="db-item-author"> ${el['author']} <span class="db-item-update">${el['update']}</span> <a href="${el['repo']}" target="_blank" class="db-item-repo">Repo</a></p>
	<center>
		<a class="db-item-btn" href="${el['url']}">Download</a>
	</center>
</div>

`)
        });
    });

document.querySelector('.title-search').addEventListener('keyup', (e) => {

    document.querySelectorAll('.db-item').forEach(
        x => {
            x.style.display = "none";
        }
    );

    document.querySelectorAll('.db-item').forEach(c=>{

        if(c.querySelector('h3,p').innerHTML.toLowerCase().indexOf(document.querySelector('.title-search').value.toLowerCase()) > -1){
            c.style.display="block";
        }


        if(c.querySelector('.db-item-info').innerHTML.toLowerCase().indexOf(document.querySelector('.title-search').value.toLowerCase()) > -1){
            c.style.display="block";
        }

    })

});
