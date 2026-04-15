module.exports = [
"[project]/Documents/Updating/next.jsguide/nextjs-dashboard/app/lib/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"402fd9116bda50c9e4984b59126270841068b0b686":"deleteInvoice","40e4e75377f39d5c520371575235d91b21bdb52fda":"createInvoice","603292d52711566d7b20c8b6b2d9315bb1e2fad289":"updateInvoice","605b126694e05d973d7523cc2a2342db3566c7666a":"authenticate"},"",""] */ __turbopack_context__.s([
    "authenticate",
    ()=>authenticate,
    "createInvoice",
    ()=>createInvoice,
    "deleteInvoice",
    ()=>deleteInvoice,
    "updateInvoice",
    ()=>updateInvoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Updating/next.jsguide/nextjs-dashboard/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Documents/Updating/next.jsguide/nextjs-dashboard/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Updating/next.jsguide/nextjs-dashboard/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Updating/next.jsguide/nextjs-dashboard/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Updating/next.jsguide/nextjs-dashboard/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$postgres$40$3$2e$4$2e$7$2f$node_modules$2f$postgres$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Updating/next.jsguide/nextjs-dashboard/node_modules/.pnpm/postgres@3.4.7/node_modules/postgres/src/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Updating/next.jsguide/nextjs-dashboard/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$31_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Updating/next.jsguide/nextjs-dashboard/node_modules/.pnpm/next-auth@5.0.0-beta.31_next@16.0.10_@babel+core@7.29.0_react-dom@19.2.0_react@19.2.0__react@19.2.0__react@19.2.0/node_modules/next-auth/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$41$2e$2$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Updating/next.jsguide/nextjs-dashboard/node_modules/.pnpm/@auth+core@0.41.2/node_modules/@auth/core/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Updating/next.jsguide/nextjs-dashboard/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const sql = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$postgres$40$3$2e$4$2e$7$2f$node_modules$2f$postgres$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(process.env.POSTGRES_URL, {
    ssl: "require"
});
const FormSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    customerId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    amount: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "pending",
        "paid"
    ]),
    date: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
// Use Zod to update the expected types
const UpdateInvoice = FormSchema.omit({
    id: true,
    date: true
});
const CreateInvoice = FormSchema.omit({
    id: true,
    date: true
});
async function createInvoice(formData) {
    const { customerId, amount, status } = CreateInvoice.parse({
        customerId: formData.get("customerId"),
        amount: formData.get("amount"),
        status: formData.get("status")
    });
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split("T")[0];
    try {
        await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
    } catch (error) {
        // We'll also log the error to the console for now
        console.error(error);
        return {
            message: "Database Error: Failed to Create Invoice."
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/dashboard/invoices");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/dashboard/invoices");
}
async function updateInvoice(id, formData) {
    const { customerId, amount, status } = UpdateInvoice.parse({
        customerId: formData.get("customerId"),
        amount: formData.get("amount"),
        status: formData.get("status")
    });
    const amountInCents = amount * 100;
    await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/dashboard/invoices");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/dashboard/invoices");
}
async function deleteInvoice(id) {
    // throw new Error("Failed to Delete Invoice"); Création erreur
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/dashboard/invoices");
}
async function authenticate(prevState, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signIn"])("credentials", formData);
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$41$2e$2$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AuthError"]) {
            switch(error.type){
                case "CredentialsSignin":
                    return "Invalid credentials.";
                default:
                    return "Something went wrong.";
            }
        }
        throw error;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createInvoice,
    updateInvoice,
    deleteInvoice,
    authenticate
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createInvoice, "40e4e75377f39d5c520371575235d91b21bdb52fda", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateInvoice, "603292d52711566d7b20c8b6b2d9315bb1e2fad289", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteInvoice, "402fd9116bda50c9e4984b59126270841068b0b686", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(authenticate, "605b126694e05d973d7523cc2a2342db3566c7666a", null);
}),
"[project]/Documents/Updating/next.jsguide/nextjs-dashboard/.next-internal/server/app/dashboard/invoices/page/actions.js { ACTIONS_MODULE0 => \"[project]/Documents/Updating/next.jsguide/nextjs-dashboard/app/ui/dashboard/sidenav.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Documents/Updating/next.jsguide/nextjs-dashboard/app/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$app$2f$ui$2f$dashboard$2f$sidenav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Updating/next.jsguide/nextjs-dashboard/app/ui/dashboard/sidenav.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$app$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Updating/next.jsguide/nextjs-dashboard/app/lib/actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/Documents/Updating/next.jsguide/nextjs-dashboard/.next-internal/server/app/dashboard/invoices/page/actions.js { ACTIONS_MODULE0 => \"[project]/Documents/Updating/next.jsguide/nextjs-dashboard/app/ui/dashboard/sidenav.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Documents/Updating/next.jsguide/nextjs-dashboard/app/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00930634739fa904b4e032079c4232037eb5d4772e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$app$2f$ui$2f$dashboard$2f$sidenav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"],
    "402fd9116bda50c9e4984b59126270841068b0b686",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$app$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteInvoice"],
    "40e4e75377f39d5c520371575235d91b21bdb52fda",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$app$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createInvoice"],
    "603292d52711566d7b20c8b6b2d9315bb1e2fad289",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$app$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateInvoice"],
    "605b126694e05d973d7523cc2a2342db3566c7666a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$app$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authenticate"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$invoices$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$app$2f$ui$2f$dashboard$2f$sidenav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$app$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Documents/Updating/next.jsguide/nextjs-dashboard/.next-internal/server/app/dashboard/invoices/page/actions.js { ACTIONS_MODULE0 => "[project]/Documents/Updating/next.jsguide/nextjs-dashboard/app/ui/dashboard/sidenav.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/Documents/Updating/next.jsguide/nextjs-dashboard/app/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$app$2f$ui$2f$dashboard$2f$sidenav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Updating/next.jsguide/nextjs-dashboard/app/ui/dashboard/sidenav.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Updating$2f$next$2e$jsguide$2f$nextjs$2d$dashboard$2f$app$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Updating/next.jsguide/nextjs-dashboard/app/lib/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=Documents_Updating_next_jsguide_nextjs-dashboard_06ed5161._.js.map