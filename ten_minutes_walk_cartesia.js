//You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.


walk = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'];


function isValidWalk(walk) {
    //insert brilliant code here

    if (walk.length !== 10) {
        return false;
    }

    const startingPoint = [0, 0];//[x.y]

    walk.forEach(direction => {
        switch (direction) {
            case 'n':
                startingPoint[1]++;
                break;
            case 's':
                startingPoint[1]--;
                break;
            case 'w':
                startingPoint[0]--;
                break;
            case 'e':
                startingPoint[0]++;
                break;
            default:
                break;
        }

    });
    return startingPoint[0] === 0 && startingPoint[1] === 0;
}
console.log(isValidWalk(walk));