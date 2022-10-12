/**
 * Time complexity: O(e) linear, where e = number of rivals
 * Space complexity: O(e) linear
 */
 const tolerantTeams = (rivalries) => {
    const teams = {};
    const rivals = findRivals(rivalries);
    
    for(let rival in rivals) {
        if(!(rival in teams) && !pickTeams(rivals, rival, teams, true)) {
            return false;
        }
    }
    
    return true;
};

const pickTeams = (rivals, rival, teams, currentTeam) => {
    if(rival in teams) return teams[rival] === currentTeam;
    teams[rival] = currentTeam;
    
    for(let nextRival of rivals[rival]) {
        if(!pickTeams(rivals, nextRival, teams, !currentTeam)) {
            return false;
        }
    }
    
    return true;
}

// Turn rival pairs into a graph of rivalry connections
const findRivals = rivalries => {
    const rivals = {};
    for(let rivalry of rivalries) {
        const [rival1, rival2] = rivalry;
        if(!(rival1 in rivals)) rivals[rival1] = [];
        if(!(rival2 in rivals)) rivals[rival2] = [];
        rivals[rival1].push(rival2)
        rivals[rival2].push(rival1);
    }
    
    return rivals;
}