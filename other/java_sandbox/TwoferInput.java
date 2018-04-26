class Twofer {
    static String twofer(String name) {
      String person = (name == null ? "you" : name);
      return String.format("One for %s, one for me.", person);
    }

    public static void main(String[] args) {
      String input = args.length > 0 ? args[0] : null;
      System.out.println(twofer(input));
    }
}
