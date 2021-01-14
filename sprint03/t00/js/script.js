let superTeam = {
    title: '',
    leader:'',
    members: 0,
    memberCount: '',
    agenda: '',
    isEvil: '',
  };
  superTeam.title = prompt("Name of the team:");
  superTeam.leader = prompt("Name of the team's leader:");
  superTeam.members = prompt("Names of the members of the team:").split(',');
  superTeam.memberCount = superTeam.members.length ;
  superTeam.agenda = prompt("Goals and ideas of the team:");
  superTeam.isEvil = prompt("The team is evil? ( True or false ):");

let a = `Here's the team:\n
name - ${superTeam.title}
leader - ${superTeam.leader}
members - ${superTeam.members}
memberCount - ${superTeam.memberCount}
agenda - ${superTeam.agenda}
isEvil - ${superTeam.isEvil}`;
alert(a);
