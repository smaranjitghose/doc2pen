// Initiating the canvas
const initCanvas = (id) => {
    return new fabric.Canvas(id, {
        backgroundColor : "#fff",
        width: 800,
        height: 400,
        selection: false,
    });
}

const toggleMode = (mode) => {
    if (mode === modes.pan) {
        //For button styling
        const pan = document.getElementById("pan");
        pan.style.backgroundColor = "#3f5185"
        pan.style.color = '#dfe4ea'
        document.getElementById("pen").removeAttribute("style"); 

        //Selecting mode
        currentMode = ''
        canvas.isDrawingMode = false
        canvas.renderAll();

        
    } else {
        //For button styling
        const pen = document.getElementById("pen");
        pen.style.backgroundColor = "#3f5185"
        pen.style.color = '#dfe4ea'
        document.getElementById("pan").removeAttribute("style"); 
        
        //Selecting mode
        currentMode = modes.drawing
        // console.log("color ",color);
        canvas.freeDrawingBrush.color = color
        canvas.isDrawingMode = true
        canvas.renderAll()
       
    }
    // console.log(mode);
    
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
        // console.log(event.target.value);
        color = event.target.value
        canvas.freeDrawingBrush.color = color
        canvas.renderAll()
    })
}
//Setting brush size
const setBrushSize = (event) => {
    const size = document.getElementById("pen-size");
    size.addEventListener('change', (event) => {
        // console.log(event.target.value);
        canvas.freeDrawingBrush.width = event.target.value
        
    })
}
// adding Text to the canvas
const setText = () => {
    var text= new fabric.Textbox('Enter your text',{
        width: 450
    });
    canvas.add(text);
    toggleMode(modes.pan)
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
    
    toggleMode(modes.pan)
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
    toggleMode(modes.pan)
}

const createTriangle = () => {
    const canvasCenter= canvas.getCenter()
    const triangle = new fabric.Triangle({
        width:100,
        height:100,
        fill: color,
        left: canvasCenter.left,
        top: -50,
        originX: 'center',
        originY:'center'
    })
    canvas.add(triangle);
    canvas.renderAll();
    triangle.animate('top', canvasCenter.top, {
        onChange:canvas.renderAll.bind(canvas)
    })
    toggleMode(modes.pan)
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


// To upload image to canvas
const imgAdded = (e) => {
    const inputElem = document.getElementById("imageFile")
    const file = inputElem.files[0];
    reader.readAsDataURL(file)
    toggleMode(modes.pan)
}
const canvas = initCanvas("canvas");

// Defined variables and constant
let mousePressed = false;
let color = '#000000';
const svgState = {};
let group = {}

// Background image URL
let currentMode = 'drawing';
const modes = {
    pan: 'pan',
    drawing:'drawing'
}

// Setting the toggle options
setPanEvents(canvas)

// Seting the color picker
setColorPicker()

//Setting brush size
setBrushSize()
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


 