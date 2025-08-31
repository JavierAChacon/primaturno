/*
  Warnings:

  - A unique constraint covering the columns `[idNumber]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_idNumber_key" ON "public"."user"("idNumber");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_key" ON "public"."user"("phone");
