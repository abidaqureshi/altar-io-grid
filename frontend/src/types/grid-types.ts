export type GridProps = {
    cells: string[][]; // 2D array of strings representing the grid cells
};

export type GridGeneratorProps = {
    grid: string[][]; // 2D array of strings representing the grid cells
    code_secret: string; // Secret code for the grid
};
