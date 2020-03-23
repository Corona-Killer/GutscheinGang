export interface Team {
  members: TeamMember[];
}
export interface TeamMember {
  firstName: string;
  lastname?: string;
  githubUsername: string;
}

export const team: Team = {
  members: [
    { firstName: 'Felix', lastname: '', githubUsername: 'redalertexpert' },
    { firstName: 'Ferdinand', lastname: 'Koenneker', githubUsername: 'Koenneker' },
    { firstName: 'Henri', lastname: 'Froese', githubUsername: 'hf2000510' },
    { firstName: 'Jens', lastname: '', githubUsername: 'L04L3R' },
    { firstName: 'Julia', lastname: '', githubUsername: 'Juliaetta' },
    { firstName: 'Julian', lastname: 'Lüders', githubUsername: 'JulianLueders' },
    { firstName: 'Stefan', lastname: '', githubUsername: 'TheWoozyDude' },
    { firstName: 'Tobias', lastname: 'Wälde', githubUsername: 'tobiaswaelde' },
  ]
};