// Initiating the canvas
const initCanvas = (id) => {
    return new fabric.Canvas(id, {
        width: 500,
        height: 500,
        selection: false 
    });
}

// Setting the background image to canvas
const setBackground = (url, canvas) => {
    fabric.Image.fromURL(url, (img) => {
        canvas.backgroundImage = img
        canvas.renderAll()
    })
}

const toggleMode = (mode) => {
    if (mode === modes.pan) {
        if (currentMode === modes.pan) {
            currentMode = ''
        } else {
            currentMode = modes.pan
            canvas.isDrawingMode = false
            canvas.renderAll()
        }
    } else if (mode === modes.drawing) {
        if (currentMode === modes.drawing) {
            currentMode = ''
            canvas.isDrawingMode = false
            canvas.renderAll()
        } else {
            currentMode = modes.drawing
            console.log("color ",color);
            canvas.freeDrawingBrush.color = color
            canvas.isDrawingMode = true
            canvas.renderAll()
        }
    }
    console.log(mode);
    
}

// Toggle events
const setPanEvents = (canvas) => {
    canvas.on('mouse:move', (event) => {
        // console.log(e);
         if (mousePressed && currentMode === modes.pan) {
             canvas.setCursor('grab')
             canvas.renderAll()
             const mEvent = event.e;
             const delta = new fabric.Point(mEvent.movementX, mEvent.movementY)
             canvas.relativePan(delta)
         } else if (mousePressed && currentMode === modes.drawing) {
             canvas.isDrawingMode = true
             canvas.renderAll()
         }
     })
     canvas.on('mouse:up', (event) => {
         mousePressed = false;
     
         canvas.setCursor('grab')
         canvas.renderAll()
     })
     canvas.on('mouse:down', (event) => {
         mousePressed = true;
         if (currentMode === modes.pan) {
             canvas.setCursor('default')
             canvas.renderAll()
         }
         
     })
}

// Setting the color of brush
const setColorPicker = () => {
    const picker = document.getElementById("colorPicker");
    picker.addEventListener('change', (event) => {
        console.log(event.target.value);
        color = event.target.value
        canvas.freeDrawingBrush.color = color
        canvas.renderAll()
    })
}

// Objects creating functions(Circle, Rectangle)
const createCircle = () => {
    const canvasCenter = canvas.getCenter()
    const circle = new fabric.Circle({
        radius:50,
        fill: color,
        left: canvasCenter.left,
        top: canvasCenter.top,
        originX: 'center',
        originY:'center'
    })
    canvas.add(circle)
    canvas.renderAll()
    circle.animate('top', canvas.height - 50, {
        onChange: canvas.renderAll.bind(canvas),
        onComplete : () => {
            circle.animate('top', canvasCenter.top, {
                onChange:canvas.renderAll.bind(canvas)
            })
        }
    })
}
const createRectangle = () => {
    const canvasCenter = canvas.getCenter()
    const rectangle = new fabric.Rect({
        width: 100,
        height: 100,
        fill: color,
        left: canvasCenter.left,
        top: -50,
        originX: 'center',
        originY:'center'
    })
    canvas.add(rectangle);
    canvas.renderAll();
    rectangle.animate('top', canvasCenter.top, {
        onChange:canvas.renderAll.bind(canvas)
    })
    // rectangle.on('selected')
}

// Grouping the Objects
const groupObjects = (canvas,group,shouldGroup) => {
    if (shouldGroup) {
        const objects = canvas.getObjects()
        group.val = new fabric.Group(objects)
        clearCanvas(canvas,svgState)
        canvas.add(group.val)
        canvas.requestRenderAll()
    } else {
        group.val.destroy()
        const oldGroup = group.val.getObjects()
        clearCanvas(canvas,svgState)
        canvas.add(...oldGroup)
        group.val = null
        canvas.requestRenderAll()
    }
}

// To clear the canvas
const clearCanvas = (canvas, state) => {
    state.val = canvas.toSVG()
    canvas.getObjects().forEach((o) => {
        if (o !== canvas.backgroundImage) {
            canvas.remove(o);
        }
    })
}

// To restore the canvas
const restoreCanvas = (canvas,state,bgUrl) => {
    if (state.val) {
        
        fabric.loadSVGFromString(state.val, objects => {
            canvas.add(...objects)
            objects = objects.filter(o=>o['xlink:href'] !== bgUrl)
            canvas.requestRenderAll()
        })
    }
}

// To upload image to canvas
const imgAdded = (e) => {
    const inputElem = document.getElementById("imageFile")
    const file = inputElem.files[0];
    reader.readAsDataURL(file)
}
const canvas = initCanvas("canvas");

// Defined variables and constant
let mousePressed = false;
let color = '#000000';
const svgState = {};
let group = {}

// Background image URL
const bgUrl = 'https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Geometric-Simple-Background-Image.jpg'
let currentMode;
const modes = {
    pan: 'pan',
    drawing:'drawing'
}

// Setting the background image
setBackground(bgUrl, canvas)

// Setting the toggle options
setPanEvents(canvas)

// Seting the color picker
setColorPicker()

// For uploading the image
const reader = new FileReader()
const inputFile = document.getElementById("imageFile");
inputFile.addEventListener('change', imgAdded)
reader.addEventListener('load', () => {
    fabric.Image.fromURL(reader.result, img => {
        canvas.add(img)
        canvas.requestRenderAll()
    });
})

 