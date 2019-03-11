function getTheBestDepth(A) {
 // A = [-4,-1,-3,2,4,1,4];
 if (A.length <= 2) return 0;
 bestDepth = -1;
 currMinDepth = 0;
 let P = A[0];
 let Q = A[0];
 let R = A[0];
 let status = 'P';
 let i = 0;
 while (i < A.length - 1) {
 if (A[i] > A[i + 1]) {
 if (status === 'R') {
 currMinDepth = Math.min(P - Q, R - Q);
 if (currMinDepth > 0 && currMinDepth > bestDepth) {
 bestDepth = currMinDepth;
 }
 P = A[i];
 }
 Q = A[i + 1];
 status = 'Q';
 i++;
 continue;
 } else if (A[i + 1] > A[i]) {
 if (status === 'Q' || status === 'R') {
 R = A[i + 1];
 i++;
 status = 'R';
 if (i === A.length - 1) {
 currMinDepth = Math.min(P - Q, R - Q);
 if (currMinDepth > bestDepth) {
 bestDepth = currMinDepth;
 }
 }
 continue;
 }
 if (status === 'P') {
 P = A[i + 1];
 i++;
 continue;
 }
 }
 i++;
 }
 return bestDepth;
}
