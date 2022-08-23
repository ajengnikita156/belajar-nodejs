var gaji= 4500000;
var trsp= 10000;
var bpjs = 250000;
var infak = 50000;
var p = 2.5/100 ;
var pajak = gaji * p;
var hari = 24;
var total = gaji - (pajak + bpjs + infak)+(trsp * hari);
var potongan = pajak + bpjs + infak;
var Tunjangan = trsp * hari;


console.log("gaji kotor :"+ "Rp." + gaji );
console.log("===================");
console.log("potongan pajak 2,5% :"+"Rp." + (gaji * p));
console.log("potongan BPJS :"+ "Rp." + bpjs);
console.log("potongan infak :"+ "Rp." + infak)
console.log("===================");
console.log("Total Potongan : "+ (pajak + bpjs + infak));
console.log("===================");
console.log("Tunjangan Transport :"+ "Rp." + trsp);
console.log("Total Hari Kerja" + " 24 Hari");
console.log("===================");
console.log("Total Tunjangan : " +(trsp * hari));
console.log("===================");
console.log("Perhitungan gaji :");
console.log("(gaji kotor - potongan )+ Tunjangan")
console.log("(4500000-412500)+240000");
console.log("===================");
console.log("Gaji Bersih:"+ "Rp." + total);