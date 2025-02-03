import { useContext, useRef, useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { ThemeContext } from "@/components/ThemeProvider";
import ActionButton from "@/components/actionbutton";

const screen = Dimensions.get("window");

type PostT = {
  model: string;
  location: string;
  images: string[];
  price: {
    value: number;
    currency: string;
  }
  distance: {
    value: number;
    unit: string;
  };
}

function Post({post}: {post: PostT}) {
  const { theme } = useContext(ThemeContext);
  const imageIndex = useSharedValue<number>(0);

  const colors = theme.colors.home;

  const formatedPrice = Intl.NumberFormat("es-AR").format(post.price.value);
  const formatedDistance = Intl.NumberFormat("es-AR").format(post.distance.value);

  return (
    <View style={styles.post}>
      <Carousel
        data={post.images}
        width={screen.width}
        style={{width: "100%", height: "100%", borderRadius: 40}}
        onProgressChange={imageIndex}
        renderItem={({item}) => <Image style={styles.postImage} source={{uri: item}} />}
      />

      <LinearGradient
        style={styles.postTopGradient}      
        colors={[colors.gradients.top, "transparent"]}
      />

      <Pagination.Basic 
        data={post.images}
        progress={imageIndex}
        containerStyle={{
          position: "absolute", 
          top: "2%", 
          width: "100%", 
          display: "flex", 
          justifyContent: "center",
          gap: 3
        }}
        dotStyle={{...styles.postPaginationDot, backgroundColor: colors.pagination.dot}}
        activeDotStyle={{...styles.postPaginationDot, backgroundColor: colors.pagination.activeDot}}
      />

      <View style={styles.postLocation}>
        <SimpleLineIcons name="pin" color={colors.location} />
        <Text style={{color: colors.location}}>{post.location}</Text>
      </View>

      <LinearGradient
        style={styles.postBottomGradient}      
        colors={["transparent", colors.gradients.bottom]}
      />

      <View style={styles.postInfo}>
        <View 
          style={{
            width: "75%", 
            display: "flex", 
            alignItems: "center", 
            backgroundColor: colors.model.container,
            borderRadius: 50,
            paddingVertical: "2%"
          }}
        >
          <Text style={{ color: colors.model.text, fontWeight: "bold" }}>{post.model}</Text>
        </View>
        <View style={{
          width: "75%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}>
          <Text style={{ color: colors.info.text, fontWeight: "bold" }}>{post.price.currency} {formatedPrice}</Text>
          <Text style={{ color: colors.info.text, fontWeight: "bold" }}>{formatedDistance} {post.distance.unit}</Text>
        </View>
      </View>
    </View>
  );
}


export default function Home() {
  const postCarousel = useRef<ICarouselInstance>(null);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [ posts ] = useState<PostT[]>([
    {
      model: "Modelo",
      location: "Colegiales",
      images: [
        "https://www.hdcarwallpapers.com/walls/ferrari_supercar_4k-HD.jpg",
        "https://www.hdcarwallpapers.com/walls/ferrari_supercar_4k-HD.jpg",
        "https://www.hdcarwallpapers.com/walls/ferrari_supercar_4k-HD.jpg",
        "https://www.hdcarwallpapers.com/walls/ferrari_supercar_4k-HD.jpg",
      ],
      price: {
        value: 10_000,
        currency: "USD"
      },
      distance: {
        value: 10_000,
        unit: "km"
      }
    },

    {
      model: "Modelo",
      location: "Nuñez",
      images: [
        "https://wallpapers.com/images/featured/full-hd-car-cpncxfsj9u9zu14k.jpg",
        "https://wallpapers.com/images/featured/full-hd-car-cpncxfsj9u9zu14k.jpg",
        "https://wallpapers.com/images/featured/full-hd-car-cpncxfsj9u9zu14k.jpg",
        "https://wallpapers.com/images/featured/full-hd-car-cpncxfsj9u9zu14k.jpg",
      ],
      price: {
        value: 10_000,
        currency: "USD"
      },
      distance: {
        value: 10_000,
        unit: "km"
      }
    }
  ]);

  const onAccept = () => {
    postCarousel.current?.next();
  };

  const onReject = () => {
    postCarousel.current?.next();
  };

  const onSave = () => {
    toggleTheme();
  };

  return (
    <View style={{...styles.container, backgroundColor: theme.colors.common.background}}>

      <Carousel
        ref={postCarousel}
        enabled={false}
        loop={false}
        data={posts}
        width={screen.width}
        style={{ height: "80%", flexGrow: 1}}
        renderItem={({item}) => <Post post={item} />}
      />

      <View style={styles.controls}>
        <ActionButton onPress={onReject} type="reject" size={80} />
        <ActionButton onPress={onSave} type="save" size={80} />
        <ActionButton onPress={onAccept} type="accept" size={80} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },

  post: {
    flexDirection: "column",
    width: "94%",
    height: "100%",
    marginInline: "3%",
  },

  postInfo: {
    position: "absolute",
    bottom: "3%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },

  postLocation: {
    position: "absolute",
    left: "3%",
    top: "5%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  postImage: {
    objectFit: "cover", 
    width: "100%", 
    height: "100%", 
  },

  postBottomGradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "20%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  postTopGradient: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "15%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  postPaginationDot: {
    borderRadius: 30,
    width: 60,
    height: 8,
  },

  controls: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  }
});
