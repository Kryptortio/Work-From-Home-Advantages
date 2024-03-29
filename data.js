const tags = {
	env:{title:'Environment',icon:'🌳'},
	save:{title:'Savings',icon:'💰'},
	ben:{title:'Benefit',icon:'😊'},
	promo:{title:'Reputation',icon:'🏆'},
	workplace:{title:'Attractive workspace',icon:'❤️'},
	prod:{title:'Productivity',icon:'⚙️'},
	health:{title:'Health',icon:'➕'},
};

const index = [
	{id:000,title:'Less emissions from travel',tags:['env','promo']},
	{id:001,title:'A lot of saved time every day for employees (travel time, food, clothes), easily an hour every day or more',tags:['ben']},
	{id:002,title:'Ability to work with less distractions',tags:['ben','prod','save']},
	{id:003,title:'Makes the workplace more attractive (help with recruitment and retention)',tags:['ben','promo','workplace']},
	{id:004,title:'Less spread of disease and encourages employees to stay home when they are sick',tags:['prod','save','health']},
	{id:005,title:'Less sick leave if employees can work while they are slightly sick',tags:['prod','health']},
	{id:006,title:'Less travel costs for employees',tags:['ben']},
	{id:007,title:'Ability to cook during lunch hour',tags:['ben','health']},
	{id:008,title:'Possibility to create a workspace more optimized for you (sound, light, temperature, gear)',tags:['ben','workplace','health']},
	{id:009,title:'Easier to recruit from a larger geographical area',tags:['workplace','save','prod']},
	{id:010,title:'Less cost for office maintenance (cleaning, wear, repairs etc)',tags:['save']},
	{id:011,title:'Less consumption of office resources (water, soap, electricity, heat/cold, coffee etc)',tags:['save']},
	{id:012,title:'Option for employees to do small task during the day e.g accept deliveries, keep an eye on handymen, slow cooking etc',tags:['ben','workplace']},
	{id:013,title:'Encourages asynchronous communication which reduces interruption and can improve productivity',tags:['prod']},
	{id:014,title:'Happier staff with better work life balance due to more spare time',tags:['ben','workplace','prod','health']},
	{id:015,title:'Less clothing requirements (cheaper, more comfortable)',tags:['ben','save']},
	{id:016,title:'Less delays due to traffic, weather, public transport',tags:['prod','save','health']},
	{id:017,title:'Less tiring meetings due to more comfortable seating, less social pressure etc',tags:['ben','health','prod']},
	{id:018,title:'Less risk of disturbing colleagues due to bad habits, loud music etc',tags:['ben','prod']},
	{id:019,title:'Possible to listen to music without headphones',tags:['ben','prod','health']},
	{id:020,title:'The entire workforce is not knocked out at the same time in the event of a power/internet outage, fire alarm or the similar',tags:['prod','health']},
	{id:021,title:'Less requirements for large spaces for e.g. parking, meetings and workplaces',tags:['save']},
	{id:022,title:'Easier to reach employees when they don\'t have a big building to run around in',tags:['prod']},
	{id:023,title:'Easier for the disabled or people with disabilities/chronic pain to work',tags:['prod','ben','promo','workplace']},
	{id:024,title:'Less risks of office drama, harassment, discrimination etc',tags:['prod','ben','health']},
	{id:025,title:'Opportunity to use e.g. an exercise bike during work without disturbing anyone',tags:['health']},
	{id:026,title:'Opportunity to sell car and use public transport if enough work can be done from home',tags:['ben','env','promo']},
	{id:027,title:'Opportunity to drum with fingers, use anti stress toys or sing without disturbing anyone',tags:['ben','health']},
	{id:028,title:'Less queue for toilets, microwaves etc',tags:['prod','ben']},
	{id:029,title:'Less disappointment from employees who got used to working from home during the pandemic',tags:['ben','prod','promo']},
	{id:030,title:'More opportunity for flexibility around working hours (since you are already at home, it is easier to work a little longer if there is a crisis, for example), greater opportunity to e.g. cover more of the day with helpline support',tags :['prod']},
	{id:031,title:'Easier for introverted employees to keep their "batteries" charged',tags:['prod','health']},
	{id:032,title:'Possible to highlight home work to show that the company thinks about the environment',tags:['env','promo']},
	{id:033,title:'Easier to meet with external parties without disturbing colleagues (does not require meeting room and change of workplace)',tags:['prod','save']},
	{id:034,title:'No worries about getting home on time after work (and less need to finish earlier)',tags:['prod','ben','health']},
	{id:035,title:'Opportunity to use own better equipment for work (screens, chair etc)',tags:['prod','ben','save']},
	{id:036,title:'Opportunity to rent out part of the office.',tags:['save']},
	{id:037,title:'Employees can save on e.g. dog/babysitter',tags:['ben']},
	{id:038,title:'Employees with slightly older children can work even if the child is sick (and reduce the risk of infecting other employees)',tags:['prod','save','health']},
	{id:039,title:'Employees can avoid going out in dangerous road conditions and risk ending up in an accident',tags:['prod','ben','health']},
	{id:040,title:'Less need to buy a more expensive and centrally located home',tags:['ben','health']},
	{id:041,title:'Easier for employees to hide embarrassing medical problems',tags:['ben','health','prod']},
	{id:042,title:'Possible to work on the way to holiday destinations and be able to enjoy a "longer" holiday',tags:['ben','health','prod']},
	{id:043,title:'Possible to quickly help your family in emergency situations',tags:['ben','health']},
	{id:044,title:'Possible to take part in small important events in your family\'s life (e.g. children\'s first steps)',tags:['ben','health']},
	{id:045,title:'Possible to be able to use the lunch break to do some household chores so you have more time after work',tags:['ben','health','prod']},
	{id:046,title:'Access to your own private toilet',tags:['ben','health']},
	{id:047,title:'Possible to work outside in the fresh air, summer cottage etc',tags:['ben','health','prod']},
	{id:048,title:'Possible to keep an eye on the home to avoid fire, burglary, leaks etc',tags:['ben']},
	{id:049,title:'Easy to take a nap over your lunch break',tags:['ben','health','prod']},
	{id:050,title:'Help the community by reducing the traffic load',tags:['promo']},
	{id:051,title:'Easier for employees to be punctual when they just need to turn on the computer to be ready',tags:['prod','ben']},
	{id:052,title:'Encouraging employees to learn new digital collaboration technologies that can boost productivity both onsite and from home',tags:['prod','ben']},
	{id:053,title:'Opportunity for savings on equipment if the employee has his own equipment at home',tags:['save','env']},
	{id:054,title:'Reduced cost of transport damage to portable equipment ',tags:['save','env']},
	{id:055,title:'Easier to keep notes and dubblechecking details quickly when you have meetings from your workstation',tags:['prod']},
];

const texts = {
	pageTitle: "Work From Home Advantages",
	furtherReading: "Further reading",
	suggestions: "Make suggestions or report issues",
	shareText: "Share",
}