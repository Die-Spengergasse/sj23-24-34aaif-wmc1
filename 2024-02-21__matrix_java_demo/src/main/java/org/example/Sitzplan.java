package org.example;

import java.util.Arrays;

public class Sitzplan {
    private String[][] plaetze;

    public Sitzplan() {
        plaetze = new String[5][];
        plaetze[0] = new String[4]; // letzte Reihe
        for (int i=1; i<plaetze.length; i++) {
            plaetze[i] = new String[6];
        }
    }

    void eintragen(String name, int reihe, int spalte) {
        plaetze[reihe][spalte] = name;
    }

    @Override
    public String toString() {
        String str = "Sitzplan: \n";
        for (int reihe=0; reihe<plaetze.length; reihe++) {
            str += "Reihe " + reihe + ": ";
            for (int spalte=0; spalte<plaetze[reihe].length; spalte++) {
                String pl = plaetze[reihe][spalte];
                str += (pl == null ? "__" : pl) + "\t";
            }
            str += "\n";
        }
        return str;
    }
}
