class Twofer {
    String twofer(String name) {
      String person = (name == null ? "you" : name);
      return String.format("One for %s, one for me.", person);
    }
}
