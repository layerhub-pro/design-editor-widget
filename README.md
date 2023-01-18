# Design Editor Widget

## Folder Organization

```txt
 assets
 common
 components
    Resizable
    Scrollable
    Loader
    Icons
contexts
    DataContext
    GraphicEditor
    Layout
hooks
    useData
    useGraphicEditor
styles
    theme
utils
views
    Panels
        index.ts
        Panels.tsx
        PanelsList.tsx
        Templates.tsx
        Text.tsx
        Images.tsx
        Elements.tx
        Uploads.tsx
    Toolbox
        index.ts
        Toolbox.tsx
        Image.tsx
        Text.tsx
        Vector.tsx
        Path.tsx
        Multiple.tsx
        Layers.tsx
    AddOns
        Zoom.tsx
        Pagination.tsx
        Layers.tsx
Editor.ts
Container.ts
Provider.ts
main.ts
```

## SDK Organization

```
editor
    state
        scenes
        scene
    designManager
        scenes
            add
            update
            delete
            duplicate
        scene
            add
            update
            delete
            duplicate
    zoom
        zoomIn
        zoomOut
        zoomToFit
        zoomToRatio
    history
        undo
        redo
        reset

```

```ts

// Manage design
editor.design.toJSON()
editor.design.toPNG()

// Manage scenes
editor.scenes.add(options)
editor.scenes.update(id, options)
editor.scenes.delete(id: string)

// Manage scene
editor.scene.add()
editor.scene.delete()
editor.scene.update()
editor.scene.render()
editor.scene.bringToFront()
editor.scene.bringForwards()
editor.scene.alignTop()
editor.scene.alignLeft()

// Editor history
editor.undo()
editor.rede()
editor.reset()

// Editor zoom
editor.zoom.zoomIn()
editor.zoom.zoomOut()
```
