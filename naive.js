const naive = function (s1, s2) {
	s1 = s1.toLowerCase();
	s2 = s2.toLowerCase();

	return s1 === s2 ? 1 : 0;
}

module.exports = naive;