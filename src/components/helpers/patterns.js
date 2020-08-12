import { ALIVE, WORLD_SIZE, createWorld } from '../Game';

export const loadPreset = preset => {
    let newWorld = createWorld();
    switch (preset) {
        case 'beacon':
            return beacon(newWorld);
        case 'glider':
            return glider(newWorld);
        case 'pulsar':
            return pulsar(newWorld);
        case 'diehard':
            return diehard(newWorld);
        case 'gliderGun':
            return gliderGun(newWorld);
        case 'line':
            return line(newWorld)
        case 'combination':
            return combination(newWorld)
        case 'brain':
            return brain(newWorld)
        default:
            return newWorld;
    }
}

const line = world => {
    const half = Math.floor(WORLD_SIZE / 2);
    world[half].fill(ALIVE);
    return world;
}

const glider = world => {
    world[3][1] = ALIVE;
    world[3][2] = ALIVE;
    world[3][3] = ALIVE;
    world[2][3] = ALIVE;
    world[1][2] = ALIVE;
    return world;
}

const diehard = world => {
    world[17][16] = ALIVE;
    world[18][10] = ALIVE;
    world[18][11] = ALIVE;
    world[19][11] = ALIVE;
    world[19][15] = ALIVE;
    world[19][16] = ALIVE;
    world[19][17] = ALIVE;
    return world;
}

const pulsar = world => {
    world[2][4] = ALIVE;
    world[2][5] = ALIVE;
    world[2][6] = ALIVE;
    world[2][10] = ALIVE;
    world[2][11] = ALIVE;
    world[2][12] = ALIVE;

    world[4][2] = ALIVE;
    world[4][7] = ALIVE;
    world[4][9] = ALIVE;
    world[4][14] = ALIVE;

    world[5][2] = ALIVE;
    world[5][7] = ALIVE;
    world[5][9] = ALIVE;
    world[5][14] = ALIVE;

    world[6][2] = ALIVE;
    world[6][7] = ALIVE;
    world[6][9] = ALIVE;
    world[6][14] = ALIVE;

    world[7][4] = ALIVE;
    world[7][5] = ALIVE;
    world[7][6] = ALIVE;
    world[7][10] = ALIVE;
    world[7][11] = ALIVE;
    world[7][12] = ALIVE;

    world[9][4] = ALIVE;
    world[9][5] = ALIVE;
    world[9][6] = ALIVE;
    world[9][10] = ALIVE;
    world[9][11] = ALIVE;
    world[9][12] = ALIVE;

    world[10][2] = ALIVE;
    world[10][7] = ALIVE;
    world[10][9] = ALIVE;
    world[10][14] = ALIVE;

    world[11][2] = ALIVE;
    world[11][7] = ALIVE;
    world[11][9] = ALIVE;
    world[11][14] = ALIVE;

    world[12][2] = ALIVE;
    world[12][7] = ALIVE;
    world[12][9] = ALIVE;
    world[12][14] = ALIVE;

    world[14][4] = ALIVE;
    world[14][5] = ALIVE;
    world[14][6] = ALIVE;
    world[14][10] = ALIVE;
    world[14][11] = ALIVE;
    world[14][12] = ALIVE;

    return world;
}

const gliderGun = world => {
    world[5][1] = ALIVE;
    world[5][2] = ALIVE;
    world[6][1] = ALIVE;
    world[6][2] = ALIVE;

    world[3][13] = ALIVE; 
    world[3][14] = ALIVE;
    world[4][12] = ALIVE; 
    world[4][16] = ALIVE;
    world[5][11] = ALIVE; 
    world[5][17] = ALIVE;
    world[6][11] = ALIVE; 
    world[6][15] = ALIVE;
    world[6][17] = ALIVE; 
    world[6][18] = ALIVE;
    world[7][11] = ALIVE; 
    world[7][17] = ALIVE;
    world[8][12] = ALIVE; 
    world[8][16] = ALIVE;
    world[9][13] = ALIVE; 
    world[9][14] = ALIVE;

    world[1][25] = ALIVE;
    world[2][23] = ALIVE; 
    world[2][25] = ALIVE;
    world[3][21] = ALIVE; 
    world[3][22] = ALIVE;
    world[4][21] = ALIVE; 
    world[4][22] = ALIVE;
    world[5][21] = ALIVE; 
    world[5][22] = ALIVE;
    world[6][23] = ALIVE; 
    world[6][25] = ALIVE;
    world[7][25] = ALIVE;

    world[3][35] = ALIVE; 
    world[3][36] = ALIVE;
    world[4][35] = ALIVE; 
    world[4][36] = ALIVE;
    return world;
}

const beacon = world => {
    world[20][20] = ALIVE;
    world[20][21] = ALIVE;
    world[21][20] = ALIVE;
    world[22][23] = ALIVE;
    world[23][23] = ALIVE;
    world[23][22] = ALIVE;
    return world;
}

const combination = world => {
    world[0][12] = ALIVE;
    world[1][12] = ALIVE;
    world[2][12] = ALIVE;
    world[1][6] = ALIVE;
    world[2][7] = ALIVE;
    world[0][8] = ALIVE;
    world[1][8] = ALIVE;
    world[2][8] = ALIVE;
    return world;
}

const brain = world => {
    world[15][15] = ALIVE;
    world[15][16] = ALIVE;
    world[16][14] = ALIVE;
    world[16][17] = ALIVE;
    world[16][23] = ALIVE;
    world[16][24] = ALIVE;
    world[17][14] = ALIVE;
    world[17][15] = ALIVE;
    world[17][16] = ALIVE;
    world[17][20] = ALIVE;
    world[17][21] = ALIVE;
    world[17][22] = ALIVE;
    world[18][14] = ALIVE;
    world[18][17] = ALIVE;
    world[18][19] = ALIVE;
    world[18][20] = ALIVE;
    world[18][21] = ALIVE;
    world[18][22] = ALIVE;
    world[19][15] = ALIVE;
    world[19][16] = ALIVE;
    world[19][17] = ALIVE;
    world[19][21] = ALIVE;
    world[20][15] = ALIVE;
    world[20][18] = ALIVE;
    world[20][19] = ALIVE;
    world[20][20] = ALIVE;
    world[21][17] = ALIVE;
    world[21][22] = ALIVE;
    world[21][23] = ALIVE;
    world[22][17] = ALIVE;
    world[22][18] = ALIVE;
    world[22][19] = ALIVE;
    world[22][20] = ALIVE;
    world[22][21] = ALIVE;
    world[22][23] = ALIVE;
    world[24][17] = ALIVE;
    world[24][18] = ALIVE;
    world[24][19] = ALIVE;
    world[24][20] = ALIVE;
    world[24][21] = ALIVE;
    world[24][23] = ALIVE;
    world[25][17] = ALIVE;
    world[25][22] = ALIVE;
    world[25][23] = ALIVE;
    world[26][15] = ALIVE;
    world[26][18] = ALIVE;
    world[26][19] = ALIVE;
    world[26][20] = ALIVE;
    world[27][15] = ALIVE;
    world[27][16] = ALIVE;
    world[27][17] = ALIVE;
    world[27][21] = ALIVE;
    world[28][14] = ALIVE;
    world[28][17] = ALIVE;
    world[28][19] = ALIVE;
    world[28][20] = ALIVE;
    world[28][21] = ALIVE;
    world[28][22] = ALIVE;
    world[29][14] = ALIVE;
    world[29][15] = ALIVE;
    world[29][16] = ALIVE;
    world[29][20] = ALIVE;
    world[29][21] = ALIVE;
    world[29][22] = ALIVE;
    world[30][14] = ALIVE;
    world[30][17] = ALIVE;
    world[30][23] = ALIVE;
    world[30][24] = ALIVE;
    world[31][15] = ALIVE;
    world[31][16] = ALIVE;
    return world;
}