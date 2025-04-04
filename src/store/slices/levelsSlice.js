import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const wrongStarSelected = createAsyncThunk(
    'levels/wrongStarSelected',
    async (_, { dispatch }) => {
        dispatch(setStatus('error'));
        await new Promise(resolve => setTimeout(resolve, 1000));
        dispatch(resetLevel());
    }
);

const level1 = {
    constellation: "Big Bear",
    stars: [
        { top: 65, left: 77 },
        { top: 128, left: 219 },
        { top: 156, left: 89 },
        { top: 182, left: 39 },
        { top: 185, left: 123 },
        { top: 225, left: 169 },
        { top: 288, left: 191 },
        { top: 294, left: 261 },
        { top: 339, left: 58 },
        { top: 361, left: 169 },
        { top: 388, left: 255 },
        { top: 222, left: 276 }
    ],
    correctSequence: [3, 2, 4, 5, 6, 7, 11, 5]
};

const level2 = {
    constellation: "Orion",
    stars: [
        { top: 228, left: 167 },
        { top: 95, left: 107 },
        { top: 53, left: 191 },
        { top: 107, left: 225 },
        { top: 199, left: 201 },
        { top: 213, left: 185 },
        { top: 345, left: 137 },
        { top: 316, left: 265 },
        { top: 65, left: 77 },
        { top: 158, left: 111 },
        { top: 182, left: 39 },
        { top: 237, left: 119 },
        { top: 339, left: 58 },
        { top: 408, left: 149 },
        { top: 388, left: 255 },
        { top: 199, left: 267 },
        { top: 164, left: 265 }
    ],
    correctSequence: [0, 1, 2, 3, 4, 5, 0, 6, 7, 4]
};

const level3 = {
    constellation: "Cassiopeia",
    stars: [
        { top: 138, left: 42 },
        { top: 211, left: 101 },
        { top: 207, left: 179 },
        { top: 287, left: 219 },
        { top: 223, left: 301 },
        { top: 65, left: 77 },
        { top: 53, left: 191 },
        { top: 95, left: 107 },
        { top: 107, left: 225 },
        { top: 119, left: 188 },
        { top: 164, left: 104 },
        { top: 164, left: 265 },
        { top: 199, left: 267 },
        { top: 240, left: 30 },
        { top: 339, left: 58 },
        { top: 316, left: 265 },
        { top: 345, left: 137 },
        { top: 408, left: 149 },
        { top: 388, left: 255 }
    ],
    correctSequence: [0, 1, 2, 3, 4]
};

const level4 = {
    constellation: "Swan",
    stars: [
        { top: 353, left: 15 },
        { top: 310, left: 92 },
        { top: 234, left: 152 },
        { top: 164, left: 231 },
        { top: 77, left: 249 },
        { top: 44, left: 273 },
        { top: 164, left: 104 },
        { top: 287, left: 219 },
        { top: 365, left: 307 },
        { top: 50, left: 59 },
        { top: 95, left: 107 },
        { top: 119, left: 188 },
        { top: 183, left: 42 },
        { top: 211, left: 101 },
        { top: 199, left: 267 },
        { top: 223, left: 301 },
        { top: 408, left: 149 },
        { top: 388, left: 255 }
    ],
    correctSequence: [
        [0, 1, 2, 3, 4, 5],
        [6, 2, 7, 8]
    ]
};

const level5 = {
    constellation: "Scorpio",
    stars: [
        { top: 281, left: 95 },
        { top: 318, left: 70 },
        { top: 345, left: 86 },
        { top: 345, left: 134 },
        { top: 333, left: 167 },
        { top: 261, left: 167 },
        { top: 189, left: 197 },
        { top: 173, left: 215 },
        { top: 107, left: 267 },
        { top: 143, left: 273 },
        { top: 183, left: 275 },
        { top: 50, left: 59 },
        { top: 44, left: 273 },
        { top: 77, left: 249 },
        { top: 95, left: 107 },
        { top: 119, left: 188 },
        { top: 164, left: 104 },
        { top: 183, left: 42 },
        { top: 211, left: 101 },
        { top: 223, left: 301 },
        { top: 234, left: 153 },
        { top: 287, left: 219 },
        { top: 353, left: 15 },
        { top: 365, left: 307 },
        { top: 388, left: 255 },
        { top: 408, left: 149 }
    ],
    correctSequence: [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 7],
        [7, 9],
        [10, 7]
    ]
};

const level6 = {
    constellation: "Andromeda",
    stars: [
        { top: 153, left: 43 },
        { top: 150, left: 71 },
        { top: 138, left: 81 },
        { top: 77, left: 55 },
        { top: 207, left: 213 },
        { top: 201, left: 244 },
        { top: 192, left: 261 },
        { top: 195, left: 313 },
        { top: 129, left: 237 },
        { top: 278, left: 216 },
        { top: 394, left: 168 },
        { top: 351, left: 98 },
        { top: 302, left: 104 },
        { top: 250, left: 152 },
        { top: 44, left: 273 },
        { top: 77, left: 249 },
        { top: 107, left: 267 },
        { top: 119, left: 188 },
        { top: 211, left: 101 },
        { top: 213, left: 152 },
        { top: 318, left: 70 },
        { top: 353, left: 15 },
        { top: 376, left: 49 },
        { top: 333, left: 167 },
        { top: 388, left: 255 },
        { top: 365, left: 307 }
    ],
    correctSequence: [
        [0, 1, 2],
        [3, 2, 4, 5, 6, 7],
        [8, 5, 9, 10],
        [11, 12, 13, 9, 4]
    ]
};

const level7 = {
    constellation: "Hercules",
    stars: [
        { top: 371, left: 250 },
        { top: 351, left: 228 },
        { top: 249, left: 204 },
        { top: 179, left: 195 },
        { top: 101, left: 222 },
        { top: 131, left: 272 },
        { top: 324, left: 141 },
        { top: 302, left: 104 },
        { top: 259, left: 167 },
        { top: 207, left: 139 },
        { top: 195, left: 129 },
        { top: 193, left: 70 },
        { top: 113, left: 101 },
        { top: 44, left: 273 },
        { top: 77, left: 249 },
        { top: 77, left: 55 },
        { top: 119, left: 188 },
        { top: 153, left: 43 },
        { top: 195, left: 313 },
        { top: 201, left: 244 },
        { top: 207, left: 213 },
        { top: 302, left: 228 },
        { top: 318, left: 70 },
        { top: 353, left: 15 },
        { top: 351, left: 98 },
        { top: 365, left: 307 },
        { top: 393, left: 168 }
    ],
    correctSequence: [
        [0, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10, 11, 12],
        [9, 3],
        [8, 2]
    ]
};

const level8 = {
    constellation: "Gemini",
    stars: [
        { top: 334, left: 222 },
        { top: 305, left: 139 },
        { top: 255, left: 131 },
        { top: 207, left: 89 },
        { top: 193, left: 70 },
        { top: 293, left: 240 },
        { top: 231, left: 70 },
        { top: 165, left: 143 },
        { top: 119, left: 180 },
        { top: 153, left: 86 },
        { top: 207, left: 213 },
        { top: 225, left: 262 },
        { top: 208, left: 308 },
        { top: 251, left: 255 },
        { top: 44, left: 273 },
        { top: 77, left: 249 },
        { top: 80, left: 180 },
        { top: 77, left: 55 },
        { top: 113, left: 101 },
        { top: 131, left: 272 },
        { top: 302, left: 104 },
        { top: 318, left: 70 },
        { top: 353, left: 15 },
        { top: 376, left: 49 },
        { top: 394, left: 168 }
    ],
    correctSequence: [
        [0, 1, 2, 3, 4],
        [5, 2],
        [6, 3, 7, 8],
        [9, 7, 10, 11, 12],
        [13, 10]
    ]
};

const level9 = {
    constellation: "Pegasus",
    stars: [
        { top: 131, left: 80 },
        { top: 113, left: 128 },
        { top: 155, left: 169 },
        { top: 177, left: 178 },
        { top: 207, left: 213 },
        { top: 237, left: 317 },
        { top: 328, left: 273 },
        { top: 289, left: 173 },
        { top: 248, left: 155 },
        { top: 189, left: 70 },
        { top: 194, left: 24 },
        { top: 242, left: 51 },
        { top: 248, left: 89 },
        { top: 296, left: 140 },
        { top: 44, left: 273 },
        { top: 77, left: 249 },
        { top: 80, left: 180 },
        { top: 80, left: 40 },
        { top: 131, left: 272 },
        { top: 208, left: 308 },
        { top: 318, left: 70 },
        { top: 353, left: 15 },
        { top: 376, left: 49 },
        { top: 394, left: 168 }
    ],
    correctSequence: [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 7, 4]
    ]
};

const level10 = {
    constellation: "Little Lion",
    stars: [
        { top: 177, left: 295 },
        { top: 154, left: 272 },
        { top: 180, left: 204 },
        { top: 219, left: 204 },
        { top: 254, left: 249 },
        { top: 293, left: 255 },
        { top: 277, left: 92 },
        { top: 305, left: 22 },
        { top: 220, left: 58 },
        { top: 228, left: 98 },
        { top: 44, left: 273 },
        { top: 77, left: 249 },
        { top: 83, left: 206 },
        { top: 80, left: 180 },
        { top: 80, left: 40 },
        { top: 113, left: 128 },
        { top: 131, left: 80 },
        { top: 155, left: 169 },
        { top: 189, left: 70 },
        { top: 194, left: 24 }
    ],
    correctSequence: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 3]
};

const initialState = {
    levels: [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10],
    currentLevelIndex: 0,
    status: 'idle',
    frontChain: [],
    backChain: [],
    multiProgress: null
};

const levelsSlice = createSlice({
    name: 'levels',
    initialState,
    reducers: {
        starSelected(state, action) {
            const clicked = action.payload;
            const level = state.levels[state.currentLevelIndex];
            const cs = level.correctSequence;
            if (Array.isArray(cs[0])) {
                if (!state.multiProgress) {
                    state.multiProgress = cs.map(() => ({ front: [], back: [] }));
                }
                let updated = false;
                for (let i = 0; i < cs.length; i++) {
                    const line = cs[i];
                    const progress = state.multiProgress[i];
                    let allowed = [];
                    if (progress.front.length === 0 && progress.back.length === 0) {
                        allowed = [line[0], line[line.length - 1]];
                    } else if (progress.front.length > 0 && progress.back.length === 0) {
                        let pos = progress.front[progress.front.length - 1];
                        allowed = pos < line.length - 1 ? [line[pos + 1]] : [];
                    } else if (progress.back.length > 0 && progress.front.length === 0) {
                        let pos = progress.back[progress.back.length - 1];
                        allowed = pos > 0 ? [line[pos - 1]] : [];
                    } else if (progress.front.length > 0 && progress.back.length > 0) {
                        let frontPos = progress.front[progress.front.length - 1];
                        let backPos = progress.back[progress.back.length - 1];
                        if (frontPos < line.length - 1) allowed.push(line[frontPos + 1]);
                        if (backPos > 0) allowed.push(line[backPos - 1]);
                    }
                    if (allowed.includes(clicked)) {
                        if (progress.front.length === 0 && progress.back.length === 0) {
                            if (clicked === line[0]) {
                                progress.front.push(0);
                            } else if (clicked === line[line.length - 1]) {
                                progress.back.push(line.length - 1);
                            }
                        } else if (progress.front.length > 0 && progress.back.length === 0) {
                            let pos = progress.front[progress.front.length - 1];
                            if (clicked === line[pos + 1]) {
                                progress.front.push(pos + 1);
                            }
                        } else if (progress.back.length > 0 && progress.front.length === 0) {
                            let pos = progress.back[progress.back.length - 1];
                            if (clicked === line[pos - 1]) {
                                progress.back.push(pos - 1);
                            }
                        } else if (progress.front.length > 0 && progress.back.length > 0) {
                            let frontPos = progress.front[progress.front.length - 1];
                            let backPos = progress.back[progress.back.length - 1];
                            if (clicked === line[frontPos + 1]) {
                                progress.front.push(frontPos + 1);
                            } else if (clicked === line[backPos - 1]) {
                                progress.back.push(backPos - 1);
                            }
                        }
                        updated = true;
                        break;
                    }
                }
                if (updated) {
                    let allComplete = true;
                    for (let i = 0; i < cs.length; i++) {
                        const line = cs[i];
                        const progress = state.multiProgress[i];
                        let frontPos = progress.front.length ? progress.front[progress.front.length - 1] : null;
                        let backPos = progress.back.length ? progress.back[progress.back.length - 1] : null;
                        if (frontPos === null && backPos === null) {
                            allComplete = false;
                            break;
                        }
                        if (frontPos === null) {
                            if (backPos !== 0) {
                                allComplete = false;
                                break;
                            }
                        } else if (backPos === null) {
                            if (frontPos !== line.length - 1) {
                                allComplete = false;
                                break;
                            }
                        } else {
                            if (frontPos + 1 < backPos) {
                                allComplete = false;
                                break;
                            }
                        }
                    }
                    if (allComplete) {
                        state.status = 'passed';
                    }
                }
            } else {
                let line = cs;
                if (!line.includes(clicked)) {
                    state.status = 'error';
                    state.frontChain = [];
                    state.backChain = [];
                    state.multiProgress = null;
                    return;
                }
                if (state.frontChain.length === 0 && state.backChain.length === 0) {
                    if (clicked === line[0]) {
                        state.frontChain.push(0);
                    } else if (clicked === line[line.length - 1]) {
                        state.backChain.push(line.length - 1);
                    }
                } else if (state.frontChain.length > 0 && state.backChain.length === 0) {
                    let pos = state.frontChain[state.frontChain.length - 1];
                    if (pos < line.length - 1 && clicked === line[pos + 1]) {
                        state.frontChain.push(pos + 1);
                    }
                } else if (state.backChain.length > 0 && state.frontChain.length === 0) {
                    let pos = state.backChain[state.backChain.length - 1];
                    if (pos > 0 && clicked === line[pos - 1]) {
                        state.backChain.push(pos - 1);
                    }
                } else if (state.frontChain.length > 0 && state.backChain.length > 0) {
                    let frontPos = state.frontChain[state.frontChain.length - 1];
                    let backPos = state.backChain[state.backChain.length - 1];
                    if (frontPos < line.length - 1 && clicked === line[frontPos + 1]) {
                        state.frontChain.push(frontPos + 1);
                    } else if (backPos > 0 && clicked === line[backPos - 1]) {
                        state.backChain.push(backPos - 1);
                    }
                }
                const effectiveChain = [...state.frontChain, ...[...state.backChain].reverse()];
                if (effectiveChain.length === line.length) {
                    state.status = 'passed';
                }
            }
        },
        resetLevel(state) {
            state.status = 'idle';
            state.frontChain = [];
            state.backChain = [];
            state.multiProgress = null;
        },
        nextLevel(state) {
            state.currentLevelIndex = state.currentLevelIndex + 1;
            state.status = 'idle';
            state.frontChain = [];
            state.backChain = [];
            state.multiProgress = null;
        },
        resetAll(state) {
            state.currentLevelIndex = 0;
            state.status = 'idle';
            state.frontChain = [];
            state.backChain = [];
            state.multiProgress = null;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }
});

export const { starSelected, resetLevel, nextLevel, resetAll, setStatus } = levelsSlice.actions;
export default levelsSlice.reducer;
