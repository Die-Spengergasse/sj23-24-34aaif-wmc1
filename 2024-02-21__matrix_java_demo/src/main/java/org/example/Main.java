package org.example;

public class Main {


    public static void main(String[] args) {
//        demoSitzplan();
        demoMatrix();
    }

    private static void demoMatrix() {
        Matrix m = new Matrix(5);
        System.out.println("Wert: " + m.getWert(7, 9));
    }

    private static void demoSitzplan() {
        System.out.println("Hello 4AAIF!");
        Sitzplan spl = new Sitzplan();

        spl.eintragen("AO", 0, 2);
        spl.eintragen("AA", 1, 0);
        spl.eintragen("AO", 1, 1);
        spl.eintragen("MK", 1, 2);
        spl.eintragen("EA", 1, 3);
        spl.eintragen("LB", 1, 4);

        spl.eintragen("UK", 2, 0);
        spl.eintragen("AN", 2, 1);
        spl.eintragen("AE", 2, 2);
        spl.eintragen("AO", 2, 3);
        spl.eintragen("JH", 2, 4);


        spl.eintragen("AK", 3, 4);
        spl.eintragen("AT", 3, 5);

        System.out.println(spl);
    }
}