import BackButton from "@/components/BackButton";
import FavouriteButton from "@/components/FavouriteButton";
import Info from "@/shared/Info";
import Section from "@/shared/Section";
import { withScreenLayout } from "@/hoc/withScreenLayout";
import { useHeroById } from "@/hooks/useHeroById";
import colors from "@/theme/colors";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";

function HeroDetails() {
  const { hero, loading, error } = useHeroById();

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color={colors.foreground} />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-white text-[20px]">Something went wrong...</Text>
      </View>
    )
  }

  return (
    <View className="flex-1">
      {!hero ? (
        <View className="flex-1 items-center justify-center">
          <Text className="text-white text-[20px]">Something went wrong...</Text>
        </View>
      ) : (
        <>
        <LinearGradient
        colors={[colors.background, colors.foreground]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="p-6 rounded-b-[30px] items-center"
      >
        <View className="w-full flex-row items-center justify-between">
          <BackButton />

          <Text className="text-white text-4xl font-extrabold">
            {hero?.name || '...'}
          </Text>

          <FavouriteButton hero={hero} />
        </View>

        <Image
          source={{
            uri: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/ac58010a8a66e05d1cac1eb85fee2b69/superbohaterowie.png",
          }}
          className="w-48 h-72 rounded-xl mt-4"
          resizeMode="cover"
        />
      </LinearGradient>
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          <View className="px-4 mt-6 gap-6">
            <View>
              <Text className="text-2xl font-bold mb-2 text-white">
                Power Stats
              </Text>

              <View className="flex-row flex-wrap justify-between gap-y-3">
                {Object.entries(hero.powerstats).map(([key, val], index) => (
                  <View
                    key={index}
                    className="w-[30%] bg-gray-100 p-3 rounded-xl border border-gray-400 items-center"
                  >
                    <Text className="text-gray-700 text-sm">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </Text>
                    <Text className="font-bold text-lg">{val}</Text>
                  </View>
                ))}
              </View>
            </View>

            <Section title="Appearance">
              <Info label="Gender" value={hero.appearance.gender} />
              <Info label="Race" value={hero.appearance.race} />
              <Info label="Eye Color" value={hero.appearance["eye-color"]} />
              <Info label="Hair Color" value={hero.appearance["hair-color"]} />
              <Info label="Height" value={hero.appearance.height.join(", ")} />
              <Info label="Weight" value={hero.appearance.weight.join(", ")} />
            </Section>

            <Section title="Biography">
              <Info label="Full Name" value={hero.biography["full-name"]} />
              <Info label="Alter Egos" value={hero.biography["alter-egos"]} />
              <Info label="Alignment" value={hero.biography.alignment} />
              <Info
                label="Place of Birth"
                value={hero.biography["place-of-birth"]}
              />
              <Info
                label="First Appearance"
                value={hero.biography["first-appearance"]}
              />
              <Info label="Aliases" value={hero.biography.aliases.join(", ")} />
            </Section>

            <Section title="Work">
              <Info label="Occupation" value={hero.work.occupation} />
              <Info label="Base" value={hero.work.base} />
            </Section>

            <Section title="Connections">
              <Info
                label="Group Affiliation"
                value={hero.connections["group-affiliation"]}
              />
              <Info label="Relatives" value={hero.connections.relatives} />
            </Section>
          </View>
        </ScrollView>
        </>
      )}
    </View>
  );
}

export default withScreenLayout(HeroDetails);
