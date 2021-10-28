const shapeGroups = [
    {
        "name": "Polar Rose",
        "slug": "polar-rose",
        "hint": "A sinusoid plotted in polar coordinates",
        "shapes": [
            {
                "shape": "Polar Rose",
                "fields": [
                    {
                        "name": {
                            "title": "Amplitude",
                            "symbol": "a",
                            "label": "a"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 15,
                            "max": 500,
                            "step": 1,
                            "default": 100
                        }
                    },
                    {
                        "name": {
                            "title": "Petal factor",
                            "symbol": "n",
                            "label": "n"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 1,
                            "max": 128,
                            "step": 1,
                            "default": 5
                        }
                    },
                    {
                        "name": {
                            "title": "Spatial factor",
                            "symbol": "n",
                            "label": "n"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 1,
                            "max": 128,
                            "step": 1,
                            "default": 2
                        }
                    },
                    {
                        "name": {
                            "title": "Offset parameter",
                            "symbol": "c",
                            "label": "c"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 0,
                            "max": 500,
                            "step": 1,
                            "default": 50
                        }
                    }
                ]
            }
        ]
    },
    {
        "name": "Trigonometric Functions",
        "slug": "trig-func",
        "hint": "A sinusoid plotted in polar coordinates",
        "shapes": [
            {
                "shape": "Sine",
                "fields": [
                    {
                        "name": {
                            "title": "Amplitude",
                            "symbol": "a",
                            "label": "a"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 15,
                            "max": 500,
                            "step": 1,
                            "default": 100
                        }
                    },
                    {
                        "name": {
                            "title": "Frequency",
                            "symbol": "n",
                            "label": "n"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 1,
                            "max": 128,
                            "step": 1,
                            "default": 5
                        }
                    },
                    {
                        "name": {
                            "title": "Phase angle (in deg)",
                            "symbol": "p",
                            "label": "p"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 0,
                            "max": 360,
                            "step": 1,
                            "default": 0
                        }
                    },
                    {
                        "name": {
                            "title": "Cycles",
                            "symbol": "c",
                            "label": "c"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 0,
                            "max": 200,
                            "step": 1,
                            "default": 10
                        }
                    }
                ]
            },
            {
                "shape": "Cosine",
                "fields": [
                    {
                        "name": {
                            "title": "Amplitude",
                            "symbol": "a",
                            "label": "a"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 15,
                            "max": 500,
                            "step": 1,
                            "default": 100
                        }
                    },
                    {
                        "name": {
                            "title": "Frequency",
                            "symbol": "n",
                            "label": "n"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 1,
                            "max": 128,
                            "step": 1,
                            "default": 5
                        }
                    },
                    {
                        "name": {
                            "title": "Phase angle (in deg)",
                            "symbol": "p",
                            "label": "p"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 0,
                            "max": 360,
                            "step": 1,
                            "default": 0
                        }
                    },
                    {
                        "name": {
                            "title": "Cycles",
                            "symbol": "c",
                            "label": "c"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 0,
                            "max": 200,
                            "step": 1,
                            "default": 10
                        }
                    }
                ]
            },
            {
                "shape": "Tangent",
                "fields": [
                    {
                        "name": {
                            "title": "Amplitude",
                            "symbol": "a",
                            "label": "a"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 15,
                            "max": 500,
                            "step": 1,
                            "default": 100
                        }
                    },
                    {
                        "name": {
                            "title": "Frequency",
                            "symbol": "n",
                            "label": "n"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 1,
                            "max": 128,
                            "step": 1,
                            "default": 5
                        }
                    },
                    {
                        "name": {
                            "title": "Phase angle (in deg)",
                            "symbol": "p",
                            "label": "p"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 0,
                            "max": 360,
                            "step": 1,
                            "default": 0
                        }
                    },
                    {
                        "name": {
                            "title": "Cycles",
                            "symbol": "c",
                            "label": "c"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 0,
                            "max": 200,
                            "step": 1,
                            "default": 10
                        }
                    }
                ]
            }
        ]
    },
    {
        "name": "Polygon",
        "slug": "polygon",
        "hint": "A sinusoid plotted in polar coordinates",
        "shapes": [
            {
                "shape": "Polygon",
                "fields": [
                    {
                        "name": {
                            "title": "Vertices count",
                            "symbol": "n",
                            "label": "n"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 3,
                            "max": 128,
                            "step": 1,
                            "default": 3
                        }
                    },
                    {
                        "name": {
                            "title": "Median count",
                            "symbol": "m",
                            "label": "m"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 1,
                            "max": 500,
                            "step": 1,
                            "default": 100
                        }
                    }
                ]
            }
        ]
    },
    {
        "name": "Spiral",
        "slug": "spiral",
        "hint": "Path of a point in a plane moving around a central point while continuously receding...",
        "shapes": [
            {
                "shape": "Archimedian",
                "fields": [
                    {
                        "name": {
                            "title": "Turn factor",
                            "symbol": "n",
                            "label": "n"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 3,
                            "max": 128,
                            "step": 1,
                            "default": 3
                        }
                    },
                    {
                        "name": {
                            "title": "Distance control",
                            "symbol": "d",
                            "label": "d"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 1,
                            "max": 500,
                            "step": 1,
                            "default": 100
                        }
                    },
                    {
                        "name": {
                            "title": "Turns (in degrees)",
                            "symbol": "t",
                            "label": "t"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 0,
                            "max": 360,
                            "step": 1,
                            "default": 100
                        }
                    }
                ]
            },
            {
                "shape": "Logarithmic",
                "fields": [
                    {
                        "name": {
                            "title": "a",
                            "symbol": "a",
                            "label": "a"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 3,
                            "max": 128,
                            "step": 1,
                            "default": 3
                        }
                    },
                    {
                        "name": {
                            "title": "k",
                            "symbol": "k",
                            "label": "k"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 1,
                            "max": 500,
                            "step": 1,
                            "default": 100
                        }
                    },
                    {
                        "name": {
                            "title": "Turns (in degrees)",
                            "symbol": "t",
                            "label": "t"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 0,
                            "max": 360,
                            "step": 1,
                            "default": 100
                        }
                    }
                ]
            },
            {
                "shape": "Fermat",
                "fields": [
                    {
                        "name": {
                            "title": "a",
                            "symbol": "a",
                            "label": "a"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 3,
                            "max": 128,
                            "step": 1,
                            "default": 3
                        }
                    },
                    {
                        "name": {
                            "title": "k",
                            "symbol": "k",
                            "label": "k"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 1,
                            "max": 500,
                            "step": 1,
                            "default": 100
                        }
                    },
                    {
                        "name": {
                            "title": "Turns (in degrees)",
                            "symbol": "t",
                            "label": "t"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 0,
                            "max": 360,
                            "step": 1,
                            "default": 100
                        }
                    }
                ]
            },
            {
                "shape": "Doppler",
                "fields": [
                    {
                        "name": {
                            "title": "a",
                            "symbol": "a",
                            "label": "a"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 3,
                            "max": 128,
                            "step": 1,
                            "default": 3
                        }
                    },
                    {
                        "name": {
                            "title": "k",
                            "symbol": "k",
                            "label": "k"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 1,
                            "max": 500,
                            "step": 1,
                            "default": 100
                        }
                    },
                    {
                        "name": {
                            "title": "Turns (in degrees)",
                            "symbol": "t",
                            "label": "t"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 0,
                            "max": 360,
                            "step": 1,
                            "default": 100
                        }
                    }
                ]
            },
            {
                "shape": "Fibonacci",
                "fields": [
                    {
                        "name": {
                            "title": "a",
                            "symbol": "a",
                            "label": "a"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 3,
                            "max": 128,
                            "step": 1,
                            "default": 3
                        }
                    },
                    {
                        "name": {
                            "title": "k",
                            "symbol": "k",
                            "label": "k"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 1,
                            "max": 500,
                            "step": 1,
                            "default": 100
                        }
                    },
                    {
                        "name": {
                            "title": "Turns (in degrees)",
                            "symbol": "t",
                            "label": "t"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 0,
                            "max": 360,
                            "step": 1,
                            "default": 100
                        }
                    }
                ]
            },
            {
                "shape": "Golden",
                "fields": [
                    {
                        "name": {
                            "title": "a",
                            "symbol": "a",
                            "label": "a"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 3,
                            "max": 128,
                            "step": 1,
                            "default": 3
                        }
                    },
                    {
                        "name": {
                            "title": "k",
                            "symbol": "k",
                            "label": "k"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 1,
                            "max": 500,
                            "step": 1,
                            "default": 100
                        }
                    },
                    {
                        "name": {
                            "title": "Turns (in degrees)",
                            "symbol": "t",
                            "label": "t"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 0,
                            "max": 360,
                            "step": 1,
                            "default": 100
                        }
                    }
                ]
            },
            {
                "shape": "Euler",
                "fields": [
                    {
                        "name": {
                            "title": "a",
                            "symbol": "a",
                            "label": "a"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 3,
                            "max": 128,
                            "step": 1,
                            "default": 3
                        }
                    },
                    {
                        "name": {
                            "title": "k",
                            "symbol": "k",
                            "label": "k"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 1,
                            "max": 500,
                            "step": 1,
                            "default": 100
                        }
                    },
                    {
                        "name": {
                            "title": "Turns (in degrees)",
                            "symbol": "t",
                            "label": "t"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 0,
                            "max": 360,
                            "step": 1,
                            "default": 100
                        }
                    }
                ]
            },
            {
                "shape": "Atzema",
                "fields": [
                    {
                        "name": {
                            "title": "a",
                            "symbol": "a",
                            "label": "a"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 3,
                            "max": 128,
                            "step": 1,
                            "default": 3
                        }
                    },
                    {
                        "name": {
                            "title": "k",
                            "symbol": "k",
                            "label": "k"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 1,
                            "max": 500,
                            "step": 1,
                            "default": 100
                        }
                    },
                    {
                        "name": {
                            "title": "Turns (in degrees)",
                            "symbol": "t",
                            "label": "t"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 0,
                            "max": 360,
                            "step": 1,
                            "default": 100
                        }
                    }
                ]
            }
        ]
    },
    {
        "name": "Superellipse",
        "slug": "superellipse",
        "hint": "A sinusoid plotted in polar coordinates",
        "shapes": [
            {
                "shape": "Superellipse",
                "fields": [
                    {
                        "name": {
                            "title": "Vertices count",
                            "symbol": "n",
                            "label": "n"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 3,
                            "max": 128,
                            "step": 1,
                            "default": 3
                        }
                    },
                    {
                        "name": {
                            "title": "Median count",
                            "symbol": "m",
                            "label": "m"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 1,
                            "max": 500,
                            "step": 1,
                            "default": 100
                        }
                    }
                ]
            }
        ]
    },
    {
        "name": "Astroid",
        "slug": "astroid",
        "hint": "A sinusoid plotted in polar coordinates",
        "shapes": [
            {
                "shape": "Astroid",
                "fields": [
                    {
                        "name": {
                            "title": "Vertices count",
                            "symbol": "n",
                            "label": "n"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 3,
                            "max": 128,
                            "step": 1,
                            "default": 3
                        }
                    },
                    {
                        "name": {
                            "title": "Median count",
                            "symbol": "m",
                            "label": "m"
                        },
                        "schema": {
                            "type": "Integer",
                            "input": "Slider",
                            "min": 1,
                            "max": 500,
                            "step": 1,
                            "default": 100
                        }
                    }
                ]
            }
        ]
    }
];

export default shapeGroups;