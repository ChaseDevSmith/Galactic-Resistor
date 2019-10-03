function createEnemy(x, y, name, steps) {
    const npc = createRedCharacter(x, y, name)
    let cursor = 0
    function walk() {
        let step = steps[cursor]
        switch (step.direction) {
            case 'left':
                npc.walkLeft()
                break;
            case 'right':
                npc.walkRight()
                break;
            case 'up':
                npc.walkUp()
                break;
            case 'down':
                npc.walkDown()
                break;
        }
        cursor = (cursor + 1) % steps.length
        setTimeout(() => {
            walk()
        }, step.duration)
    }
    walk()
    return npc
}