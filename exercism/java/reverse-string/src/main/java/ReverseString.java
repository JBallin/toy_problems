class ReverseString {

    String reverse(String s) {
        String reversed = "";
        for (int i = s.length() - 1; i >= 0 ; i--) {
          reversed += s.charAt(i);
        };
        return reversed;
    }

}
