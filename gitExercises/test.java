public class test{

  boolean truth;

  public test(boolean bool){
    truth = bool;
  }

  public static void main(String[] args){
    System.out.println("hello world");
  }

  public static boolean isTrue(boolean b){
    return b;
  }

  public boolean isTrue(){
    return isTrue(truth);
  }
}
