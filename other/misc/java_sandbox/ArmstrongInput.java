class ArmstrongNumbers {

  static boolean isArmstrongNumber(int n) {
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

  public static void main(String[] args) {
    int test = 10;
    for (int i = 0; i < args.length; i++) {
      int input = Integer.parseInt(args[i]);
      System.out.println(isArmstrongNumber(input));
    }
  }

};
