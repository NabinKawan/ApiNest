package main

import (
	"apinest/internal/db"
	"apinest/internal/db/gen/datamap"
	"fmt"
	"log"
	"os"
	"path/filepath"

	"gorm.io/gen"
)

type PostgresType struct {
	TypeName string
	Values   []string
}

type DataMapEntry struct {
	PostgresType string
	GoType       string
}

func main() {
	g := gen.NewGenerator(gen.Config{
		OutPath:           "internal/db/gen/query",
		ModelPkgPath:      "internal/db/gen/model",
		FieldNullable:     true,
		FieldSignable:     true,
		FieldCoverable:    true,
		FieldWithIndexTag: true,
		FieldWithTypeTag:  true,
		Mode:              gen.WithDefaultQuery | gen.WithQueryInterface,
	})

	// Clean model and query folders
	cleanGenFolder()

	// Use the generated dataMap from datamap package
	g.WithDataTypeMap(datamap.BuildDataMap())

	g.UseDB(db.GetInstance())

	// user := g.GenerateModel("users")
	// entitlement := g.GenerateModel("entitlements", gen.FieldRelate(field.HasOne, "User", user, &field.RelateConfig{
	// 	GORMTag: field.GormTag{"foreignKey": []string{"user_id"}, "references": []string{"id"}},
	// }))

	g.ApplyBasic(g.GenerateAllTable()...)

	g.Execute()
}

// Clean model and query folders.
func cleanGenFolder() {
	genPaths := []string{
		"internal/db/gen/model",
		"internal/db/gen/query",
	}

	// Remove all contents of the gen folder
	for _, genPath := range genPaths {
		entryPath := filepath.Join(genPath)
		if err := os.RemoveAll(entryPath); err != nil {
			log.Fatalf("failed to remove %s: %v", entryPath, err)
		}
	}

	fmt.Println("✅ Successfully cleaned gen folder")
}
