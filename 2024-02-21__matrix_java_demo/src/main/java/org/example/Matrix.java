package org.example;

/**
 * Modelliert quadratische Matrizen (im Kontext der Graphentheorie)
 */
public class Matrix {

    private int[][] werte;

    public Matrix(int n) {
        this.werte = new int[n][n];
    }

    public int getWert(int i, int j) {
        if (i >= 0 && i < werte.length) {
            if (j >=0 && j < werte[i].length) {
                return werte[i][j];
            } else {
                System.out.println("Fehler, ungueltiger Index j = " + j);
            }
        } else {
            System.out.println("Fehler, ungueltiger Index i = " + i);
        }
        return -1;
    }

    public void setWert(int wert, int i, int j) {
        // TODO
    }

    public Matrix mult(Matrix b) {
        // tODO
        return null;
    }

    public Matrix add(Matrix b) {
        // TODO
        return null;
    }

    @Override
    public String toString() {
        // TODO
        return null;
    }



}
