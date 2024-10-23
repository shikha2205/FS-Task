
    public class demo2 {
        public static int fac(int n){
          if(n==0){
            return 1;
          }
          int x=fac(n-1);
          int y=x*n;
          return y;
        }
        public static void main(String args[]){
          int n=5;
          int ans=fac(n);
          System.out.println(ans);

        }
      }
          
            
