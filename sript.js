
function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
	return 'Nieprawidłowe dane';
    } else {
	var triangleArea = a * h / 2;
	return triangleArea
    }
}

var triangle1Area = getTriangleArea(10, 6),
    triangle2Area = getTriangleArea(12, 4),
    triangle3Area = getTriangleArea(8, 0);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);
