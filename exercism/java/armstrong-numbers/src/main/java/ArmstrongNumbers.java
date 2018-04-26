class ArmstrongNumbers {

	boolean isArmstrongNumber(int n) {
		int tmp = n;
		int total = 0;
		int num_digits = Integer.toString(n).length();
		while (tmp > 0) {
			int digit = tmp % 10;
			total += Math.pow(digit, num_digits);
			tmp /= 10;
		}
		return n == total;
	}

};
