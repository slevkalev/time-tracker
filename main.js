const categoryNames = document.querySelectorAll('.category-name');
const currentData = document.querySelectorAll('.current')
const previousData = document.querySelectorAll('.previous')
const dailyBtn = document.querySelector('.daily-btn')
const weeklyBtn = document.querySelector('.weekly-btn')
const monthlyBtn = document.querySelector('.monthly-btn')



fetch("./data.json")
 .then(response => response.json())
 .then(data=> {

 	data.forEach((item,index)=>{
 		categoryNames[index].innerHTML = item.title
 		currentData[index].innerHTML = `<span class="daily active">${item.timeframes.daily.current}hrs</span>
 										<span class="weekly">${item.timeframes.weekly.current}hrs</span>
 										<span class="monthly">${item.timeframes.monthly.current}hrs</span>`
 		previousData[index].innerHTML = `<span class="daily active">Yesterday - ${item.timeframes.daily.current}hrs</span>
 										<span class="weekly">Last Week - ${item.timeframes.weekly.current}hrs</span>
 										<span class="monthly">Last Month - ${item.timeframes.monthly.current}hrs</span>`
 	})
 })
 

function remove(e){
	e.forEach(item=>{
		item.classList.remove('active')
	})
}

function toggle(e){
	e.forEach(item=>{
		item.classList.add('active')
	})
}

dailyBtn.addEventListener('click',()=>{
	const dailyInfo = document.querySelectorAll('.daily')
	const weeklyInfo = document.querySelectorAll('.weekly')
	const monthlyInfo = document.querySelectorAll('.monthly')
	toggle(dailyInfo)
	remove(weeklyInfo)
	remove(monthlyInfo)
})

weeklyBtn.addEventListener('click',()=>{
	const dailyInfo = document.querySelectorAll('.daily')
	const weeklyInfo = document.querySelectorAll('.weekly')
	const monthlyInfo = document.querySelectorAll('.monthly')
	toggle(weeklyInfo)
	remove(dailyInfo)
	remove(monthlyInfo)
})

monthlyBtn.addEventListener('click',()=>{
	const dailyInfo = document.querySelectorAll('.daily')
	const weeklyInfo = document.querySelectorAll('.weekly')
	const monthlyInfo = document.querySelectorAll('.monthly')
	toggle(monthlyInfo)
	remove(dailyInfo)
	remove(weeklyInfo)
})

