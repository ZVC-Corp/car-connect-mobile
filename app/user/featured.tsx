import { useContext } from "react";
import { Text, View, ScrollView, Image, StyleSheet, TextInput, Pressable } from "react-native";
import { ThemeContext } from "@/components/ThemeProvider";
import ActionButton from "@/components/actionbutton";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

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

const posts = [    
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
  },
];


function PostCard({ post }: { post: PostT }) {
  const { theme } = useContext(ThemeContext);
  const colors = theme.colors.featured.card;

  const formatedPrice = new Intl.NumberFormat("es-AR").format(post.price.value);
  const formatedDistance = new Intl.NumberFormat("es-AR").format(post.distance.value);

  return (
    <View style={styles.postCard}>
      <View style={styles.postCardImageContainer}>
        <Image style={styles.postCardImage} source={{uri: post.images[0]}} />
      </View>
      <View style={{...styles.postCardInfoContainer, backgroundColor: colors.info.background}}>
        <View style={styles.postCardInfo}>
          <Text style={{color: colors.info.text}}>{post.model}</Text>
          <Text style={{color: colors.info.text}}>{post.price.currency} {formatedPrice}</Text>
          <View style={{flexDirection: "row", gap: "5%", alignItems: "center"}}>
            <View style={{flexDirection: "row", gap: 5, alignItems: "center"}}>
              <SimpleLineIcons name="pin" color={colors.info.text} />
              <Text style={{color: colors.info.text}}>{post.location}</Text>
            </View>

            <Text style={{color: colors.info.distance}}>{formatedDistance} {post.distance.unit}</Text>
          </View>
        </View>

        <View style={styles.postCardControls}>
          <ActionButton onPress={() => {}} type="reject" size={54} />
          <ActionButton onPress={() => {}} type="save" size={54} />
          <ActionButton onPress={() => {}} type="accept" size={54} />
        </View>
      </View>
    </View>
  );
}

function SearchBar() {
  const { theme } = useContext(ThemeContext);
  const colors = theme.colors.featured.searchBar;

  return (
    <View style={{flexDirection: "row", gap: "2%", width: "100%"}}>
      <View style={{...styles.searchBarInputContainer, backgroundColor: colors.input.background}}>
        <SimpleLineIcons name="magnifier" size={18} color={colors.input.placeholderText} />
        <TextInput placeholderTextColor={colors.input.placeholderText} placeholder="Buscar Autos"/>
      </View>
      <Pressable style={{...styles.searchBarButton, backgroundColor: colors.button.background}}>
        <FontAwesome name="plus" size={24} color={colors.button.icon} />
      </Pressable>
    </View>
  );
}

export default function Featured() {
  const { theme } = useContext(ThemeContext);
  const colors = theme.colors.featured;

  return (
    <View style={{width: "100%", height: "100%"}}>
      <View style={{...styles.container, backgroundColor: theme.colors.common.background}}>
        <Text style={{fontWeight: "bold", color: colors.title}}>Destacados de la semana</Text>
        <SearchBar />
        <Text style={{fontWeight: "bold", color: colors.subtitle}}>Según tus últimas busquedas</Text>
        <ScrollView style={{height: "100%"}}>
          <View style={styles.postContainer}>
            {posts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </View>
        </ScrollView>
      </View>
      <LinearGradient 
        style={styles.bottomGradient}
        colors={["transparent", colors.bottomGradient]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "3%",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "2%"
  },

  postContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    height: "100%",
    justifyContent: "flex-start"
  },

  postCard: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  postCardImageContainer: {
    width: "100%", 
    height: 180,
  },

  postCardInfoContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%", 
    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: -10,
  },

  postCardInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexGrow: 1,
    padding: "2%",
    borderBottomLeftRadius: 10
  },

  postCardImage: {
    objectFit: "cover", 
    width: "100%", 
    height: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  postCardControls: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexGrow: 1,
    borderBottomRightRadius: 10,
  },

  searchBarInputContainer: {
    flexDirection: "row", 
    gap: "5%", 
    alignItems: "center", 
    borderRadius: 25, 
    paddingInline: "5%",
    flexGrow: 1

  },

  searchBarButton: {
    borderRadius: 60, 
    width: 50, 
    aspectRatio: "1/1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  bottomGradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "5%",
  }
});
