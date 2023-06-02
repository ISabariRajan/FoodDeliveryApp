

                    // onPress={()=>{
                    //     console.log("Free Delivery Press")
                    // }}
                    
                    // onPress={()=>{
                    //     // setIndexCheck(item.id)
                    //     // console.log("Presses", item)
                    //     CardParams.indexCheck = item.id
                    // }}
                    
                {/* <View>
                    <HeaderText
                        textVal={"Categories"}
                    />
                    <View>
                        {/* <SquareCards
                            size={30}
                            title={categories[0].src}
                            source={categories[0].src}
                            // source={require("assets/images/salad.png")}
                        /> 
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={categories}
                            keyExtractor={(item)=>item.id}
                            extraData={indexCheck}
                            renderItem={({item}) => <RenderItem item={item} index={indexCheck} />}
                        
                        />
                    </View>
                </View> */}

                
    const [indexCheck, setIndexCheck] = useState("0")


    const  RenderRectCard = ({item}) => {
        return (
            <TouchableOpacity
                style={{
                    marginLeft: 10
                }}
            >
                <BussinessCard1 item={item}/>
            </TouchableOpacity>
        )
    }

    function RenderItem({item, index}) {
        size = 30;
        isInverse = (indexCheck === item.id);
        border_radius=15
        return (
            <Pressable
                onPress={()=>{setIndexCheck(item.id)}}
                style={{
                    width: size * 2,
                    ...fullJustify,
                    borderRadius: border_radius,
                    marginHorizontal: 10,
                    height: size * 5/2,
                    paddingVertical: 10,
                    marginVertical: 20,
                    backgroundColor: isInverse ? COLORS.primary : COLORS.grey5
                }}
            >
                
                <SquareCards
                    size={size}
                    source={item.src}
                    border_radius={size}
                />
                <Text
                    style={{
                        fontSize: size * 0.35,
                        color: isInverse ? COLORS.white : COLORS.black
                    }}
                >
                    {item.name}
                </Text>
            </Pressable>
        )
    }