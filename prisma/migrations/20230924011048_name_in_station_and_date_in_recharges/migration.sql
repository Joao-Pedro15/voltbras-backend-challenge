/*
  Warnings:

  - Added the required column `name` to the `Stations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `Recharge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Recharge` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Stations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "planetId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "Stations_planetId_fkey" FOREIGN KEY ("planetId") REFERENCES "SuitablePlanets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Stations" ("id", "planetId") SELECT "id", "planetId" FROM "Stations";
DROP TABLE "Stations";
ALTER TABLE "new_Stations" RENAME TO "Stations";
CREATE TABLE "new_Recharge" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "stationId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    CONSTRAINT "Recharge_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Stations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Recharge_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Recharge" ("id", "stationId", "userId") SELECT "id", "stationId", "userId" FROM "Recharge";
DROP TABLE "Recharge";
ALTER TABLE "new_Recharge" RENAME TO "Recharge";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
